import { Constants } from '../types/types.ts';
import templates from './templates.ts';

const constants: Constants = {
  templates,
  general: {
    title: 'Ops Composer',
    description: 'Builder to send common operator messages',
    actionLabel: 'Compose Message',
  },
  links: {
    qcExpectations:
      'https://www.dropbox.com/s/a2ozzhkqh9lfpui/BA-Site-QC-Expectations.pdf?dl=0',
  },
  errors: {
    notMember:
      'The selected private channel does not have Ops Composer as a member! Please close, add "@Ops Composer" as a member of the private channel, then try again.',
  },
};

export default constants;
