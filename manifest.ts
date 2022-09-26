import { Manifest } from 'deno-slack-sdk/mod.ts';
import buildmWorkflow from './workflows/buildm_workflow.ts';
import c from './constants/constants.ts';

/** https://api.slack.com/future/manifest */
export default Manifest({
  name: c.general.title,
  description: c.general.description,
  icon: 'assets/icon.png',
  functions: [],
  workflows: [buildmWorkflow],
  outgoingDomains: [],
  botScopes: ['commands', 'chat:write', 'chat:write.public'],
});
