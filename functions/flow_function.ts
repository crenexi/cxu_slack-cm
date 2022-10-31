import { DefineFunction, Schema, ViewsRouter } from 'deno-slack-sdk/mod.ts';
import type { SlackFunctionHandler } from 'deno-slack-sdk/types.ts';
import { SlackAPI } from 'deno-slack-api/mod.ts';

import { ViewMetadata } from '../types/types.ts';
import constants from '../constants/constants.ts';
import templates from '../constants/templates.ts';
import { errorView } from '../views/error.view.ts';
import { selectedTemplate, step1View } from '../views/step1.view.ts';
import { selectedConvo, step2View } from '../views/step2.view.ts';
import { step3View } from '../views/step3.view.ts';
import { handleCompose } from './handle-compose.ts';

//## Function Definition

const inputProps = {
  interactivity: { type: Schema.slack.types.interactivity },
  channel: { type: Schema.slack.types.channel_id },
  user: { type: Schema.slack.types.user_id },
};

const outputProps = {
  destConvoId: { type: Schema.slack.types.channel_id },
  message: { type: Schema.slack.types.rich_text },
};

export const FlowFn = DefineFunction({
  callback_id: 'flow_function',
  title: constants.general.title,
  description: constants.general.description,
  source_file: 'functions/flow_function.ts',
  input_parameters: {
    properties: { ...inputProps },
    required: ['interactivity'],
  },
  output_parameters: {
    properties: { ...outputProps },
    required: ['destConvoId', 'message'],
  },
});

//## Function Handling

const parseMetadata = (data: string | undefined): ViewMetadata => {
  const metadata = JSON.parse(<string> data);

  if (!metadata) {
    throw new Error('View metadata is undefined!');
  }

  return metadata;
};

export const Flow: SlackFunctionHandler<
  typeof FlowFn.definition
> = async ({ inputs, token }) => {
  const client = SlackAPI(token);

  await client.views.open({
    interactivity_pointer: inputs.interactivity.interactivity_pointer,
    view: step1View(),
  });

  return {
    // Set to false; we'll set complete status in view submission handler
    completed: false,
  };
};

const ViewRouter = ViewsRouter(FlowFn);
export const { viewSubmission, viewClosed } = ViewRouter
  .addClosedHandler('error', () => {})
  .addClosedHandler('step1', () => {})
  .addSubmissionHandler('step1', ({ inputs, view }) => {
    // Get selected template from state
    const templateKey = selectedTemplate({ state: view.state });
    const template = templates.find(({ key }) => key === templateKey);

    const isDM = inputs.channel && inputs.channel[0] === 'D';
    const initialConvo = isDM ? undefined : inputs.channel;

    // Move to channel selection
    return {
      response_action: 'update',
      view: step2View({ initialConvo, template }),
    };
  })
  .addClosedHandler('step2', () => {})
  .addSubmissionHandler('step2', async ({ token, view }) => {
    const client = SlackAPI(token);

    // Get data
    const { template } = parseMetadata(view.private_metadata);
    const selConvo = selectedConvo({ state: view.state });

    // Get destination convo
    const nextView = await client.conversations.info({
      token,
      channel: selConvo,
    }).then((res) => {
      if (!res.ok) {
        // The channel is private and the app isn't a member
        const channelDNE = res.error === 'channel_not_found';
        if (channelDNE) {
          return {
            response_action: 'update',
            view: errorView({
              text: constants.errors.notMember,
            }),
          };
        }

        // Some other error
        return {
          response_action: 'update',
          view: errorView(),
        };
      }

      // All good; update view to step 3
      return {
        response_action: 'update',
        view: step3View({
          template,
          destConvo: {
            id: selConvo,
            name: res.channel?.name || 'name_undefined',
          },
        }),
      };
    });

    return nextView;
  })
  .addClosedHandler('step3', () => {})
  .addSubmissionHandler('step3', async ({ token, inputs, body, view }) => {
    const client = SlackAPI(token);

    // Get data
    const { destConvo, template } = parseMetadata(view.private_metadata);
    const { values } = view.state;
    const { user } = inputs;

    // Note destination id and compose message payload
    const message = handleCompose({ user, template, values });

    // Complete flow
    await client.functions.completeSuccess({
      function_execution_id: body.function_data.execution_id,
      outputs: {
        destConvoId: destConvo.id,
        message,
      },
    });

    return {
      response_action: 'clear',
    };
  });

export default Flow;
