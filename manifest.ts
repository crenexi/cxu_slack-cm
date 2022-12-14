import { Manifest } from 'deno-slack-sdk/mod.ts';
import cmWorkflow from './workflows/cm_workflow.ts';
import constants from './constants/constants.ts';

// Scopes required
const botScopes = [
  'commands',
  'chat:write',
  'chat:write.public',
  'channels:read',
  'groups:read',
];

/** https://api.slack.com/future/manifest */
export default Manifest({
  botScopes,
  name: constants.general.title,
  description: constants.general.description,
  longDescription: constants.general.longDescription,
  icon: 'assets/icon.png',
  functions: [],
  workflows: [cmWorkflow],
  outgoingDomains: [],
});
