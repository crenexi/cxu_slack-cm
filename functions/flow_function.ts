import { DefineFunction, Schema, ViewsRouter } from 'deno-slack-sdk/mod.ts';
import type { SlackFunctionHandler } from 'deno-slack-sdk/types.ts';
import { SlackAPI } from 'deno-slack-api/mod.ts';
import step1View from './views/step1_view.ts';
import step2View from './views/step2_view.ts';
import { selectedTemplate } from './blocks/input-template_blocks.ts';
import c from '../constants/constants.ts';

//## Function Definition

const inputProps = {
  interactivity: { type: Schema.slack.types.interactivity },
  channel: { type: Schema.slack.types.channel_id },
  user: { type: Schema.slack.types.user_id },
};

const outputProps = {
  message: { type: Schema.slack.types.rich_text },
};

export const FlowFn = DefineFunction({
  callback_id: 'flow_function',
  title: c.general.title,
  description: c.general.description,
  source_file: 'functions/flow_function.ts',
  input_parameters: {
    properties: { ...inputProps },
    required: ['interactivity'],
  },
  output_parameters: {
    properties: { ...outputProps },
    required: ['message'],
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

const handleViewClosed = () => {
  console.log('Flow cancelled');
};

const ViewRouter = ViewsRouter(FlowFn);
export const { viewSubmission, viewClosed } = ViewRouter
  .addSubmissionHandler('step1', async ({ token, inputs, body }) => {
    const client = SlackAPI(token);

    // Note the current channel
    const channel = inputs.channel;

    // Note channel name from API info
    const channelName = await client.apiCall(
      'conversations.info',
      { token, channel },
    ).then((res) => res.channel.name);

    // Get selected template from state
    const templateKey = selectedTemplate({ state: body.view.state });

    return {
      response_action: 'update',
      view: step2View({ channel, channelName, templateKey }),
    };
  })
  .addSubmissionHandler('step2', async ({ token, body }) => {
    const client = SlackAPI(token);

    await client.functions.completeSuccess({
      function_execution_id: body.function_data.execution_id,
      outputs: {
        message: 'Test message output',
      },
    });

    return {
      response_action: 'clear',
    };
  })
  .addClosedHandler('step1', handleViewClosed)
  .addClosedHandler('step2', handleViewClosed);

export const test = typeof ViewRouter.addSubmissionHandler;

export default Flow;
