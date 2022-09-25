import { Trigger } from 'deno-slack-api/types.ts';
import BuildmWorkflow from '../workflows/buildm_workflow.ts';
import c from '../constants/constants.ts';

/** https://api.slack.com/future/triggers */
const buildmTrigger: Trigger<typeof BuildmWorkflow.definition> = {
  type: 'shortcut',
  name: c.trigger.name,
  description: c.trigger.description,
  workflow: c.trigger.workflow,
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
    button_text: c.trigger.buttonLabel,
  },
};

export default buildmTrigger;
