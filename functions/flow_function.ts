import { DefineFunction, Schema, ViewsRouter } from 'deno-slack-sdk/mod.ts';
import type { SlackFunctionHandler } from 'deno-slack-sdk/types.ts';
import { SlackAPI } from 'deno-slack-api/mod.ts';
import constants from '../constants/constants.ts';
import templates, { Template } from '../constants/templates.ts';

import step1View from '../views/step1/step1.view.ts';
import { selectedTemplate } from '../views/step1/form_template/template.block.ts';

import step2View from '../views/step2/step2.view.ts';
import { selectedConvo } from '../views/step2/form_convo/convo.block.ts';

import step3View from '../views/step3/step3.view.ts';
import handleCompose from './handle-compose.ts';

//## Types

type ViewMetadata = {
  template: Template;
  destConvo: {
    id: string;
    name: string;
  };
};

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
  .addClosedHandler('step1', () => {})
  .addSubmissionHandler('step1', async ({ token, inputs, view }) => {
    // Get selected template from state
    const templateKey = selectedTemplate({ state: view.state });
    const template = templates.find(({ key }) => key === templateKey);

    // Determine the initial conversation selected
    const isSlackDeprecated = !template ? '' : template.isSlackDeprecated;
    const initialConvo = !isSlackDeprecated ? inputs.channel : inputs.user;

    // If using direct message, skip channel selection
    if (isSlackDeprecated) {
      const destConvo = await (async () => {
        const client = SlackAPI(token);
        const id = await client.conversations.open({ users: inputs.user })
          .then((res) => res.channel.id);

        return { id, name: 'DM to you' };
      })();

      return {
        response_action: 'update',
        view: step3View({ destConvo, template }),
      };
    }

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
    const destConvo = await client.conversations.info({
      token,
      channel: selConvo,
    })
      .then((res) => ({
        id: selConvo,
        name: res.channel.name,
      }));

    return {
      response_action: 'update',
      view: step3View({ template, destConvo }),
    };
  })
  .addClosedHandler('step3', () => {})
  .addSubmissionHandler('step3', async ({ token, inputs, body, view }) => {
    // Get data
    const { destConvo, template } = parseMetadata(view.private_metadata);
    const { values } = view.state;
    const { user } = inputs;

    // Note destination id and compose message payload
    const destConvoId = destConvo.id;
    const message = handleCompose({ user, template, values });

    // Complete flow
    const client = SlackAPI(token);
    await client.functions.completeSuccess({
      function_execution_id: body.function_data.execution_id,
      outputs: { destConvoId, message },
    });

    return {
      response_action: 'clear',
    };
  });

export default Flow;
