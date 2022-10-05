import templates, { Template } from './templates.ts';

export type Constants = {
  general: {
    title: string;
    description: string;
    actionLabel: string;
  };
  templates: Template[];
};

const constants: Constants = {
  templates,
  general: {
    title: 'Ops Composer',
    description: 'Builder to send common operator messages',
    actionLabel: 'Compose Message',
  },
};

export default constants;
