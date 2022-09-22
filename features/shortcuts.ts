import { ManifestShortcutsSchema } from "deno-slack-sdk/manifest/manifest_schema.ts";

const shortcuts: ManifestShortcutsSchema = [
  {
    name: "Build trainee message",
    type: "global",
    callback_id: "buildTrainee",
    description: 'Generate a "trainee" message',
  },
  {
    name: "Build expired message",
    type: "global",
    callback_id: "buildExpired",
    description: 'Generate an "Expired" message',
  },
  {
    name: "Build order message",
    type: "global",
    callback_id: "buildOrder",
    description: 'Generate an "Order" message',
  },
];

export default shortcuts;
