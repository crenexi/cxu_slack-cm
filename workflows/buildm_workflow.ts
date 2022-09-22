import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { BuildmFnDefinition } from "../functions/buildm_function.ts";

/**
 * A Workflow is a set of steps that are executed in order.
 * Each step in a Workflow is a function.
 * https://api.slack.com/future/workflows
 */
const BuildmWorkflow = DefineWorkflow({
  callback_id: "buildm_workflow",
  title: "Buildm workflow",
  description: "A buildm workflow",
  input_parameters: {
    properties: {
      interactivity: {
        type: Schema.slack.types.interactivity,
      },
      channel: {
        type: Schema.slack.types.channel_id,
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
    submit_label: "Send message",
    fields: {
      elements: [{
        name: "channel",
        title: "Channel to send message to",
        type: Schema.slack.types.channel_id,
        default: BuildmWorkflow.inputs.channel,
      }, {
        name: "message",
        title: "Message",
        type: Schema.types.string,
        long: true,
      }],
      required: ["channel", "message"],
    },
  },
);

const buildmFnStep = BuildmWorkflow.addStep(
  BuildmFnDefinition,
  {
    message: inputForm.outputs.fields.message,
  },
);

BuildmWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: inputForm.outputs.fields.channel,
  message: buildmFnStep.outputs.updatedMsg,
});

export default BuildmWorkflow;
