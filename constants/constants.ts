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
      ':information_source: For copy-only, Slack-deprecated templates destined for the Crafty Activity Feed, you may still utilize this workflow. Simply *direct message yourself* in the channel selection, then copy-paste the composed message.',
    secondWarning:
      ':warning: *THIS MESSAGE TEMPLATE IS DESTINED FOR THE CRAFTY ACTIVITY FEED*, not for Slack channels. You may still utilize this workflow. Simply *direct message yourself* in the channel selection, then copy-paste the composed message. _When pasting to the Crafy app activity feed, don\'t forget to tag people as needed before sending_.',
  },
};

export default constants;
