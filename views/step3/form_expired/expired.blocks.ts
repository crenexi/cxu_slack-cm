type FnProps = {
  id: number;
  required: boolean;
};

export const ids = {
  itemName: 'item-name',
  quantity: 'quantity',
  bbDate: 'bb-date',
  accountManager: 'account-manager',
};

// Helper for text object
const plain = (text: string) => ({ text, type: 'plain_text' });
const divider = { type: 'divider' };

// Helper for header block
const header = (text: string) => ({
  text: plain(text.toUpperCase()),
  type: 'header',
});

const itemName = ({ id, required }: FnProps) => ({
  type: 'input',
  block_id: `e${id}_${ids.itemName}`,
  label: plain('Item Name'),
  optional: !required,
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    max_length: 50,
    placeholder: plain('Name'),
  },
});

const quantity = ({ id, required }: FnProps) => ({
  type: 'input',
  block_id: `e${id}_${ids.quantity}`,
  label: plain('Quantity'),
  optional: !required,
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    max_length: 50,
    placeholder: plain('0'),
  },
});

const bbDate = ({ id, required }: FnProps) => ({
  type: 'input',
  block_id: `e${id}_${ids.bbDate}`,
  label: plain('Best By Date'),
  optional: !required,
  element: {
    type: 'datepicker',
    action_id: 'action',
    placeholder: plain('Select'),
  },
});

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

// Helper to get blocks for an entry
const entry = (id: number) => {
  const required = id === 1;

  return [
    itemName({ id, required }),
    quantity({ id, required }),
    bbDate({ id, required }),
  ];
};

const expiredBlocks = [
  accountManager,
  divider,
  header('Product 1'),
  ...entry(1),
  divider,
  header('Product 2'),
  ...entry(2),
  divider,
  header('Product 3'),
  ...entry(3),
];

export default expiredBlocks;
