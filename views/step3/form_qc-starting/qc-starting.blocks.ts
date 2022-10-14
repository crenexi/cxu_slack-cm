import { plain } from '../../../helpers/helpers.ts';

export const ids = {
  greeting: 'greeting',
  memo: 'memo',
};

const greeting = {
  type: 'input',
  block_id: ids.greeting,
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
  block_id: ids.memo,
  optional: true,
  label: plain('Memo'),
  hint: plain('Optional comment below "QC Starting" message"'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    max_length: 50,
    multiline: true,
    placeholder: plain('None'),
  },
};

const qcStartingBlocks = [greeting, memo];

export default qcStartingBlocks;
