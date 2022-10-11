export const ids = {
  priority: 'priority',
  site: 'site',
  zone: 'zone',
  quantity: 'quantity',
  request: 'request',
  tags: 'tags',
};

// Helper for text object
const plain = (text: string) => ({ text, type: 'plain_text' });
const divider = { type: 'divider' };

const priority = (() => {
  const option = (value: string, text: string) => ({
    value,
    text: {
      text,
      type: 'plain_text',
      emoji: true,
    },
  });

  const options = [
    option('high', ':stopwatch: need ASAP'),
    option('low', 'no rush'),
  ];

  return {
    type: 'input',
    block_id: ids.priority,
    label: plain('Priority'),
    element: {
      type: 'static_select',
      action_id: 'action',
      initial_option: options[1],
      options: [...options],
    },
  };
})();

const site = {
  type: 'input',
  block_id: ids.site,
  label: plain('Location/Client'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    max_length: 50,
    placeholder: plain('Block Market'),
  },
};

const zone = {
  type: 'input',
  block_id: ids.zone,
  label: plain('Floor/Zone'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    max_length: 50,
    placeholder: plain('L7 Kitchen'),
  },
};

const request = {
  type: 'input',
  block_id: ids.request,
  label: plain('Signage/Labels Needed'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    multiline: true,
    placeholder: plain('- Need\n- Need'),
  },
};

const quantity = {
  type: 'input',
  block_id: ids.quantity,
  label: plain('Quantity'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    max_length: 2,
    placeholder: plain('0'),
  },
};

const tags = {
  type: 'input',
  block_id: ids.tags,
  label: plain('Tags'),
  optional: true,
  element: {
    type: 'multi_users_select',
    action_id: 'action',
    placeholder: plain('Select'),
  },
};

const signageBlocks = [
  site,
  zone,
  divider,
  quantity,
  request,
  divider,
  priority,
  tags,
];

export default signageBlocks;
