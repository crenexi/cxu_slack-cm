import { DefineWorkflow, Schema } from 'deno-slack-sdk/mod.ts';
import { FlowFn } from '../functions/flow_function.ts';
import c from '../constants/constants.ts';

/** https://api.slack.com/future/workflows */
const BuildmWorkflow = DefineWorkflow({
  callback_id: c.workflow.id,
  title: c.workflow.title,
  description: c.workflow.description,
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
    required: ['interactivity'],
  },
});

/** https://api.slack.com/future/functions#open-a-form */
const inputForm = BuildmWorkflow.addStep(
  Schema.slack.functions.OpenForm,
  {
    title: c.workflow.title,
    interactivity: BuildmWorkflow.inputs.interactivity,
    submit_label: c.views.write.submitLabel,
    fields: {
      elements: [
        {
          name: 'channel',
          title: 'Site channel',
          type: Schema.slack.types.channel_id,
          default: BuildmWorkflow.inputs.channel,
        },
        {
          name: 'name',
          title: 'Item/product expired',
          type: Schema.types.string,
        },
        {
          name: 'quantity',
          title: 'Item quantity',
          type: Schema.types.number,
        },
        {
          name: 'bbDate',
          title: 'Date',
          type: Schema.slack.types.date,
        },
        {
          name: 'accountManager',
          title: 'Account Manager',
          type: Schema.slack.types.user_id,
        },
      ],
      required: ['channel', 'name', 'quantity', 'bbDate', 'accountManager'],
    },
  },
);

const buildmFnStep = BuildmWorkflow.addStep(FlowFn, {
  user: BuildmWorkflow.inputs.user,
  name: inputForm.outputs.fields.name,
  quantity: inputForm.outputs.fields.quantity,
  bbDate: inputForm.outputs.fields.bbDate,
  accountManager: inputForm.outputs.fields.accountManager,
});

BuildmWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: inputForm.outputs.fields.channel,
  message: buildmFnStep.outputs.updatedMsg,
});

export default BuildmWorkflow;
