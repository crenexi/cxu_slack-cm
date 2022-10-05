import { DefineWorkflow, Schema } from 'deno-slack-sdk/mod.ts';
import { FlowFn } from '../functions/flow_function.ts';
import constants from '../constants/constants.ts';

/** https://api.slack.com/future/workflows */
const BuildmWorkflow = DefineWorkflow({
  callback_id: 'buildm_workflow',
  title: constants.general.title,
  description: constants.general.description,
  input_parameters: {
    properties: {
      interactivity: {
        type: Schema.slack.types.interactivity,
      },
      channel: {
        type: Schema.slack.types.channel_id,
      },
      user: {
        type: Schema.slack.types.user_id,
      },
    },
    required: ['interactivity', 'channel', 'user'],
  },
});

const flowFnStep = BuildmWorkflow.addStep(FlowFn, {
  interactivity: BuildmWorkflow.inputs.interactivity,
  channel: BuildmWorkflow.inputs.channel,
  user: BuildmWorkflow.inputs.user,
});

BuildmWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: flowFnStep.outputs.channel,
  message: flowFnStep.outputs.message,
});

export default BuildmWorkflow;
