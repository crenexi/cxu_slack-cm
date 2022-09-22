import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { BuildmExpiredFn } from "../functions/buildm_expired_function.ts";

/**
 * A Workflow is a set of steps that are executed in order.
 * Each step in a Workflow is a function.
 * https://api.slack.com/future/workflows
 */
const BuildmWorkflow = DefineWorkflow({
  callback_id: "buildm_workflow",
  title: "Send a message",
  description: "Send a message to a site channel",
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
    required: ["interactivity"],
  },
});

/**
 * For collecting input from users, we recommend the
 * built-in OpenForm function as a first step.
 * https://api.slack.com/future/functions#open-a-form
 */
const inputForm = BuildmWorkflow.addStep(
  Schema.slack.functions.OpenForm,
  {
    title: "Send message to channel",
    interactivity: BuildmWorkflow.inputs.interactivity,
    submit_label: "Build & Send",
    fields: {
      elements: [
        {
          name: "channel",
          title: "Site channel",
          type: Schema.slack.types.channel_id,
          default: BuildmWorkflow.inputs.channel,
        },
        {
          name: "name",
          title: "Item/product expired",
          type: Schema.types.string,
        },
        {
          name: "quantity",
          title: "Item quantity",
          type: Schema.types.number,
        },
        {
          name: "bbDate",
          title: "Date",
          type: Schema.slack.types.date,
        },
        {
          name: "accountManager",
          title: "Account Manager",
          type: Schema.slack.types.user_id,
        },
      ],
      required: ["channel", "name", "quantity", "bbDate", "accountManager"],
    },
  },
);

const buildmFnStep = BuildmWorkflow.addStep(
  BuildmExpiredFn,
  {
    user: BuildmWorkflow.inputs.user,
    name: inputForm.outputs.fields.name,
    quantity: inputForm.outputs.fields.quantity,
    bbDate: inputForm.outputs.fields.bbDate,
    accountManager: inputForm.outputs.fields.accountManager,
  },
);

BuildmWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: inputForm.outputs.fields.channel,
  message: buildmFnStep.outputs.updatedMsg,
});

export default BuildmWorkflow;
