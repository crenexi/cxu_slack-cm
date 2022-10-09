import templates, { Template } from './templates.ts';

export type Constants = {
  templates: Template[];
  general: {
    title: string;
    description: string;
    actionLabel: string;
  };
  slackDeprecated: {
    firstWarning: string;
    secondWarning: string;
  };
};

const constants: Constants = {
  templates,
  general: {
    title: 'Ops Composer',
    description: 'Builder to send common operator messages',
    actionLabel: 'Compose Message',
  },
  slackDeprecated: {
    firstWarning:
      ':information_source: For "Copy Only" templates destined for the Crafty Activity Feed, you may still use this workflow. Simply *direct message yourself*, then copy-paste the composed message.',
    secondWarning:
      ':warning: *This message template is destined for the Crafty Activity Feed*, not for Slack channels. You may still utilize this workflow.\n\nSimply *select yourself* in the selection above, then copy-paste the composed message. When pasting to the Crafy app activity feed, don\'t forget to tag people as needed before sending.',
  },
};

export default constants;
