import { Constants, FieldOpsGroup } from '../types/types.ts';
import templates from './templates.ts';

const fieldOpsGroups: FieldOpsGroup[] = [
  { id: 'SPLHHRX6D', name: 'Bay Area Field Ops' },
  { id: 'SE5KQGB71', name: 'Chicago Field Ops' },
];

// deno-fmt-ignore
const prodLinkTrigger = 'https://slack.com/shortcuts/Ft048SKQDU0M/00f27eb88f9650229c9e46addb9130f4';

// deno-fmt-ignore
const longDescription = `
USING THE LINK
This link is to copy/paste into a public channel (clicking it does nothing). Doing so converts the link to a button, and adds a channel bookmark to trigger this workflow.
${prodLinkTrigger}

PURPOSE
To accelerate inputs to some types of messages.

Example - Request Signage:
Select Request Signage → select signage channel → input location/needs → send

BUGS
Encounter bugs or unexpected behavior? LMK - James Walrath.
`;

const constants: Constants = {
  templates,
  fieldOpsGroups,
  fieldOpsDefault: fieldOpsGroups[0].id,
  general: {
    title: 'Ops Composer',
    description: 'Builder to send common operator messages',
    longDescription: longDescription.trim(),
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
