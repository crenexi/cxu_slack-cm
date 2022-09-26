import { DefineFunction, Schema, ViewsRouter } from 'deno-slack-sdk/mod.ts';
import type { SlackFunctionHandler } from 'deno-slack-sdk/types.ts';
import { SlackAPI } from 'deno-slack-api/mod.ts';
import view1 from './views/view1.ts';
import view2 from './views/view2.ts';
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

  await client.views.open({
    interactivity_pointer: inputs.interactivity.interactivity_pointer,
    view: view1,
  });

  return {
    // Set to false; we'll set complete status in view submission handler
    completed: false,
  };
};

const ViewRouter = ViewsRouter(FlowFn);
export const { viewSubmission, viewClosed } = ViewRouter
  .addSubmissionHandler('view1', () => {
    console.log('Handling first submission...');

    return {
      response_action: 'update',
      view: view2,
    };
  })
  .addSubmissionHandler('view2', async ({ body, token }) => {
    console.log('Handling second submission...');

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
  });

export const test = typeof ViewRouter.addSubmissionHandler;

export default Flow;
