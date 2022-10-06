export const ids = {
  orderId: 'order-id',
  orderRecap: 'order-recap',
  deliveryDate: 'delivery-date',
  accountManager: 'account-manager',
};

const divider = { type: 'divider' };
const plain = (text: string) => ({ text, type: 'plain_text' });

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

const orderBlocks = [
  orderId,
  orderRecap,
  deliveryDate,
  divider,
  accountManager,
];

export default orderBlocks;
