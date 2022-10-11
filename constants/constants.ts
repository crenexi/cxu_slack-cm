import templates, { Template } from './templates.ts';

export type Constants = {
  templates: Template[];
  general: {
    title: string;
    description: string;
    actionLabel: string;
  };
  slackDeprecated: {
    view1Notice: string;
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
    view1Notice:
      '_Templates with *** are for the Crafty Activity Feed only. You may still use this composer. Channel selection will be skipped, and *you\'ll get a DM* of the composed message to copy-paste to the shift feed_.',
  },
};

export default constants;
