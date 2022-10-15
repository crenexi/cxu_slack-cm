import ids from '../../constants/block-ids.ts';
import { header, plain } from '../../helpers/helpers.ts';

const equipDesc = {
  type: 'input',
  block_id: ids.equipment.equipDesc,
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
  block_id: ids.equipment.equipZone,
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
  block_id: ids.equipment.equipIssue,
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
  block_id: ids.equipment.accountManager,
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
  block_id: ids.equipment.tehnicians,
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
  block_id: ids.equipment.picsReminder,
  text: plain('After sending, attach any relevant pictures!'),
};

export const equipmentBlocks = [
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
