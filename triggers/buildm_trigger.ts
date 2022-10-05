import { Trigger } from 'deno-slack-api/types.ts';
import BuildmWorkflow from '../workflows/buildm_workflow.ts';
import constants from '../constants/constants.ts';

/** https://api.slack.com/future/triggers */
const buildmTrigger: Trigger<typeof BuildmWorkflow.definition> = {
  type: 'shortcut',
  name: constants.general.actionLabel,
  description: constants.general.description,
  workflow: '#/workflows/buildm_workflow',
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
    button_text: constants.general.actionLabel,
  },
};

export default buildmTrigger;
