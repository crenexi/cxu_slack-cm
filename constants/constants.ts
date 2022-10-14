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
    view3Notice: string;
  };
  links: {
    qcExpectations: string;
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
    view1Notice: 'CAF: Crafty Activity Feed usage only',
    view3Notice:
      'Note: for the Crafty Activity Feed only. *You\'ll get the message as a DM*, Then, copy-paste to the shift feed.',
  },
  links: {
    qcExpectations:
      'https://www.dropbox.com/s/a2ozzhkqh9lfpui/BA-Site-QC-Expectations.pdf?dl=0',
  },
};

export default constants;
