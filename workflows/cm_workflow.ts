import { DefineWorkflow, Schema } from 'deno-slack-sdk/mod.ts';
import { FlowFn } from '../functions/flow_function.ts';
import constants from '../constants/constants.ts';

/** https://api.slack.com/future/workflows */
const CmWorkflow = DefineWorkflow({
  callback_id: 'cm_workflow',
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

const flowFnStep = CmWorkflow.addStep(FlowFn, {
  interactivity: CmWorkflow.inputs.interactivity,
  channel: CmWorkflow.inputs.channel,
  user: CmWorkflow.inputs.user,
});

CmWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: flowFnStep.outputs.destConvoId,
  message: flowFnStep.outputs.message,
});

export default CmWorkflow;
