import { header, plain } from '../../../helpers/helpers.ts';

export const ids = {
  equipDesc: 'equipment-desc',
  equipZone: 'equipment-zone',
  equipIssue: 'equipment-issue',
  accountManager: 'account-manager',
  tehnicians: 'technicians',
  picsReminder: 'next-steps',
};

const equipDesc = {
  type: 'input',
  block_id: ids.equipDesc,
  label: plain('Equipment'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    max_length: 50,
    placeholder: plain('Describe'),
  },
};

const equipZone = {
  type: 'input',
  block_id: ids.equipZone,
  label: plain('Location/Zone'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    max_length: 50,
    placeholder: plain('Describe'),
  },
};

const equipIssue = {
  type: 'input',
  block_id: ids.equipIssue,
  label: plain('What\'s the Issue?'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    multiline: true,
    placeholder: plain('Describe'),
  },
};

const accountManager = {
  type: 'input',
  block_id: ids.accountManager,
  label: plain('Account Manager'),
  element: {
    type: 'multi_users_select',
    action_id: 'action',
    max_selected_items: 1,
    placeholder: plain('Select'),
  },
};

const technicians = {
  type: 'input',
  block_id: ids.tehnicians,
  label: plain('Technicians'),
  optional: true,
  element: {
    type: 'multi_users_select',
    action_id: 'action',
    placeholder: plain('Select'),
  },
};

const picsReminder = {
  type: 'section',
  block_id: ids.picsReminder,
  text: plain('After sending, attach any relevant pictures!'),
};

const equipmentBlocks = [
  header(':flashlight: Issue'),
  equipDesc,
  equipZone,
  equipIssue,
  header(':iphone: Pics'),
  picsReminder,
  header(':bust_in_silhouette: Tags'),
  accountManager,
  technicians,
];

export default equipmentBlocks;
