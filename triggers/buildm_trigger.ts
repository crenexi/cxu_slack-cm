import { Trigger } from "deno-slack-api/types.ts";
import BuildmWorkflow from "../workflows/buildm_workflow.ts";
/**
 * Triggers determine when Workflows are executed. A trigger
 * file describes a scenario in which a workflow should be run,
 * such as a user pressing a button or when a specific event occurs.
 * https://api.slack.com/future/triggers
 */
const buildmTrigger: Trigger<typeof BuildmWorkflow.definition> = {
  type: "shortcut",
  name: "Build Message",
  description: "Utility to generate common Crafty messages.",
  workflow: "#/workflows/buildm_workflow",
  inputs: {
    interactivity: {
      value: "{{data.interactivity}}",
    },
    channel: {
      value: "{{data.channel_id}}",
    },
  },
  shortcuts: {
    button_text: "Build Message",
  },
};

export default buildmTrigger;
