export const ids = {
  equipDesc: 'equipment-desc',
  equipZone: 'equipment-zone',
  equipIssue: 'equipment-issue',
  accountManager: 'account-manager',
  tehnicians: 'technicians',
  nextSteps: 'next-steps',
};

// Helper for text object
const plain = (text: string) => ({ text, type: 'plain_text' });

// Helper for header block
const header = (text: string) => ({
  text: plain(text.toUpperCase()),
  type: 'header',
});

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
  block_id: ids.nextSteps,
  text: {
    type: 'plain_text',
    text: ':iphone::link: After sending, attach any relevant pictures!',
    emoji: true,
  },
};

const equipmentBlocks = [
  header('Issue'),
  equipDesc,
  equipZone,
  equipIssue,
  header('Pics'),
  picsReminder,
  header('Tags'),
  accountManager,
  technicians,
];

export default equipmentBlocks;
