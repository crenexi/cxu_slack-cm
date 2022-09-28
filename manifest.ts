import { Manifest } from 'deno-slack-sdk/mod.ts';
import buildmWorkflow from './workflows/buildm_workflow.ts';
import c from './constants/constants.ts';

// Scopes needed to read channel name in step2 of function_flow
const readScopes = ['channels:read', 'groups:read', 'mpim:read', 'im:read'];

/** https://api.slack.com/future/manifest */
export default Manifest({
  name: c.general.title,
  description: c.general.description,
  icon: 'assets/icon.png',
  functions: [],
  workflows: [buildmWorkflow],
  outgoingDomains: [],
  botScopes: ['commands', 'chat:write', 'chat:write.public', ...readScopes],
});
