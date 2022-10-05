import { DefineFunction, Schema, ViewsRouter } from 'deno-slack-sdk/mod.ts';
import type { SlackFunctionHandler } from 'deno-slack-sdk/types.ts';
import { SlackAPI } from 'deno-slack-api/mod.ts';
import constants from '../constants/constants.ts';
import { Template } from '../constants/templates.ts';

import step1View from '../views/step1/step1.view.ts';
import { selectedTemplate } from '../views/step1/form_template/template.block.ts';
import { selectedChannel } from '../views/step1/form_channel/channel.block.ts';

import step2View from '../views/step2/step2.view.ts';
import handleCompose from './handle-compose.ts';

//## Types

type ViewMetadata = {
  channel: string;
  template: Template;
};

//## Function Definition

const inputProps = {
  interactivity: { type: Schema.slack.types.interactivity },
  channel: { type: Schema.slack.types.channel_id },
  user: { type: Schema.slack.types.user_id },
};

const outputProps = {
  channel: { type: Schema.slack.types.channel_id },
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
    required: ['channel', 'message'],
  },
});

//## Function Handling

export const Flow: SlackFunctionHandler<
  typeof FlowFn.definition
> = async ({ inputs, token }) => {
  const client = SlackAPI(token);
  const channel = inputs.channel;

  await client.views.open({
    interactivity_pointer: inputs.interactivity.interactivity_pointer,
    view: step1View({ channel }),
  });

  return {
    // Set to false; we'll set complete status in view submission handler
    completed: false,
  };
};

const ViewRouter = ViewsRouter(FlowFn);
export const { viewSubmission, viewClosed } = ViewRouter
  .addClosedHandler('step1', () => {})
  .addSubmissionHandler('step1', async ({ token, view }) => {
    const client = SlackAPI(token);

    // Get selected template and channel from state
    const templateKey = selectedTemplate({ state: view.state });
    const channel = selectedChannel({ state: view.state });

    // Note channel name from API info
    const channelName = await client.apiCall(
      'conversations.info',
      { token, channel },
    ).then((res) => res.channel.name);

    return {
      response_action: 'update',
      view: step2View({ channel, channelName, templateKey }),
    };
  })
  .addClosedHandler('step2', () => {})
  .addSubmissionHandler('step2', async ({ token, inputs, body, view }) => {
    // Validate metadata existence
    if (!view.private_metadata) {
      throw new Error('View metadata is undefined!');
    }

    // Get data
    const metadata: ViewMetadata = JSON.parse(<string> view.private_metadata);
    const { channel, template } = metadata;
    const { values } = view.state;
    const { user } = inputs;

    // Get channel and compose message
    const message = handleCompose({ user, template, values });

    // Complete flow
    const client = SlackAPI(token);
    await client.functions.completeSuccess({
      function_execution_id: body.function_data.execution_id,
      outputs: { channel, message },
    });

    return {
      response_action: 'clear',
    };
  });

export default Flow;
