import ids from '../../constants/block-ids.ts';
import { header, plain } from '../../helpers/helpers.ts';

const orderId = {
  type: 'input',
  block_id: ids.order.orderId,
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
  block_id: ids.order.orderRecap,
  label: plain('Order Recap'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    max_length: 50,
    placeholder: plain('Site - Street - Floor, $0.00'),
  },
};

const deliveryDate = {
  type: 'input',
  block_id: ids.order.deliveryDate,
  label: plain('Delivery Date'),
  element: {
    type: 'datepicker',
    action_id: 'action',
    placeholder: plain('Select'),
  },
};

const listUnavailable = {
  type: 'input',
  block_id: ids.order.listUnavailable,
  optional: true,
  label: plain('Items Unavailable'),
  hint: plain('What could not make it on the order?'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    multiline: true,
    placeholder: plain('- Item'),
  },
};

const listChained = {
  type: 'input',
  block_id: ids.order.listChained,
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
  block_id: ids.order.listICNeeds,
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
  block_id: ids.order.listEdits,
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

const itemsPickup = {
  type: 'input',
  block_id: ids.order.itemsPickup,
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

const auditCheck = {
  type: 'input',
  block_id: ids.order.auditCheck,
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

export const orderBlocks = [
  header(':package: Recap'),
  orderId,
  orderRecap,
  deliveryDate,
  header(':mag: Audit'),
  auditCheck,
  listUnavailable,
  listChained,
  listEdits,
  header(':pushpin: Needs'),
  listICNeeds,
  itemsPickup,
];
