import { DefineFunction, Schema, ViewsRouter } from 'deno-slack-sdk/mod.ts';
import type { SlackFunctionHandler } from 'deno-slack-sdk/types.ts';
import { SlackAPI } from 'deno-slack-api/mod.ts';
import view1, { view1Ids } from './views/view1.ts';
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
  .addSubmissionHandler('view1', ({ inputs, body }) => {
    // Note the current channel
    const currentChannel = inputs.channel;

    // Get the selected value for the template input
    const templateKey = (() => {
      try {
        const values = body.view.state.values;
        const block = values[view1Ids.input_template_block];
        const action = block[view1Ids.input_template_action];
        return action.selected_option.value;
      } catch (err) {
        console.error(err);
      }
    })();

    return {
      response_action: 'update',
      view: view2({ currentChannel, templateKey }),
    };
  })
  .addSubmissionHandler('view2', async ({ inputs, body, token }) => {
    const client = SlackAPI(token);

    console.log(inputs);

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
  .addClosedHandler(/view/, () => {
    console.log('Flow cancelled');
  });

export const test = typeof ViewRouter.addSubmissionHandler;

export default Flow;
