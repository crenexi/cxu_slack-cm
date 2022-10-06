export const ids = {
  orderId: 'order-id',
  orderRecap: 'order-recap',
  deliveryDate: 'delivery-date',
  listChained: 'list-chained',
  listICNeeds: 'list-adjustment-needs',
  listEdits: 'list-edits-made',
  auditCheck: 'audit-check',
  itemsPickup: 'items-pickup',
  accountManager: 'account-manager',
};

const plain = (text: string) => ({ text, type: 'plain_text' });
const header = (text: string) => ({ text: plain(text), type: 'header' });

const orderId = {
  type: 'input',
  block_id: ids.orderId,
  label: plain('Order ID'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    max_length: 10,
    placeholder: plain('123456'),
  },
};

const orderRecap = {
  type: 'input',
  block_id: ids.orderRecap,
  label: plain('Order Recap'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    max_length: 50,
    placeholder: plain('Site Name - Street - Floor, $0.00'),
  },
};

const deliveryDate = {
  type: 'input',
  block_id: ids.deliveryDate,
  label: plain('Delivery Date'),
  element: {
    type: 'datepicker',
    action_id: 'action',
    placeholder: plain('Select Date'),
  },
};

const listChained = {
  type: 'input',
  block_id: ids.listChained,
  optional: true,
  label: plain('Chained Products'),
  hint: plain('Are there any "chained" products for the next order?'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    multiline: true,
    placeholder: plain('- Item'),
  },
};

const listICNeeds = {
  type: 'input',
  block_id: ids.listICNeeds,
  optional: true,
  label: plain('Adjustments Needed'),
  hint: plain('Any adjustments needed to quantities for products listed?'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    multiline: true,
    placeholder: plain('- Item'),
  },
};

const listEdits = {
  type: 'input',
  block_id: ids.listEdits,
  optional: true,
  label: plain('Edits Made'),
  hint: plain('Were any edits made to this order?'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    multiline: true,
    placeholder: plain('- Item'),
  },
};

const auditCheck = {
  type: 'input',
  block_id: ids.auditCheck,
  optional: true,
  label: plain('Audited?'),
  element: {
    type: 'checkboxes',
    action_id: 'action',
    options: [
      {
        text: plain('Have you audited this order?'),
        value: 'v1',
      },
    ],
  },
};

const itemsPickup = {
  type: 'input',
  block_id: ids.itemsPickup,
  optional: true,
  label: plain('Items for Pickup'),
  hint: plain('Any items for pick-up + reason for pick-up'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    multiline: true,
    placeholder: plain('- Item'),
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
    placeholder: plain('Select Site AM'),
  },
};

const orderBlocks = [
  header('Basics'),
  orderId,
  orderRecap,
  deliveryDate,
  accountManager,
  header('Audit'),
  listChained,
  listICNeeds,
  listEdits,
  auditCheck,
  header('Issues'),
  itemsPickup,
];

export default orderBlocks;