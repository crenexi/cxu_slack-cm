import { Manifest } from 'deno-slack-sdk/mod.ts';
import cmWorkflow from './workflows/cm_workflow.ts';
import constants from './constants/constants.ts';

// Scopes needed to read channel name in step3 of function_flow
const readScopes = ['channels:read', 'groups:read', 'mpim:read', 'im:read'];

/** https://api.slack.com/future/manifest */
export default Manifest({
  name: constants.general.title,
  description: constants.general.description,
  icon: 'assets/icon.png',
  functions: [],
  workflows: [cmWorkflow],
  outgoingDomains: [],
  botScopes: ['commands', 'chat:write', 'chat:write.public', ...readScopes],
});
