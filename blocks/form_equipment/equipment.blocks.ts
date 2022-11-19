import ids from '../../constants/block-ids.ts';
import { header, plain } from '../../helpers/helpers.ts';

const equipDesc = {
  type: 'input',
  block_id: ids.equipment.equipDesc,
  label: plain('Equipment'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    max_length: 300,
    placeholder: plain('Duke Nio'),
  },
};

const equipZone = {
  type: 'input',
  block_id: ids.equipment.equipZone,
  label: plain('Location/Zone'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    max_length: 300,
    placeholder: plain('L7 Kitchen'),
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
  header('Issue :flashlight:'),
  equipDesc,
  equipZone,
  equipIssue,
  header('Pics :link:'),
  picsReminder,
  header('Tags :busts_in_silhouette:'),
  accountManager,
  technicians,
];
