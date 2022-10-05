import { Trigger } from 'deno-slack-api/types.ts';
import CmWorkflow from '../workflows/cm_workflow.ts';
import constants from '../constants/constants.ts';

/** https://api.slack.com/future/triggers */
const cmTrigger: Trigger<typeof CmWorkflow.definition> = {
  type: 'shortcut',
  name: constants.general.actionLabel,
  description: constants.general.description,
  workflow: '#/workflows/cm_workflow',
  inputs: {
    interactivity: {
      value: '{{data.interactivity}}',
    },
    channel: {
      value: '{{data.channel_id}}',
    },
    user: {
      value: '{{data.user_id}}',
    },
  },
  shortcut: {
    button_text: 'Compose',
  },
};

export default cmTrigger;
