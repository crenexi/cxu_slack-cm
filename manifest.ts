import { Manifest } from "deno-slack-sdk/mod.ts";
import buildmWorkflow from "./workflows/buildm_workflow.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "Ops Messages",
  description: "Creates common Crafty messages",
  icon: "assets/icon.png",
  functions: [],
  workflows: [buildmWorkflow],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
