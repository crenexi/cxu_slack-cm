import ids from '../../constants/block-ids.ts';
import { plain } from '../../helpers/helpers.ts';

const greeting = {
  type: 'input',
  block_id: ids.qcStarting.greeting,
  label: plain('Greeting'),
  hint: plain('Shown as "{greeting} @here starting a Quality ..."'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    initial_value: 'Hey team!',
  },
};

const memo = {
  type: 'input',
  block_id: ids.qcStarting.memo,
  optional: true,
  label: plain('Memo'),
  hint: plain('Optional comment below "QC Starting" message"'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    multiline: true,
    placeholder: plain('None'),
  },
};

export const qcStartingBlocks = [greeting, memo];
