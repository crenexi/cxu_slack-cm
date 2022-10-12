import { divider, header, plain } from '../../../helpers/helpers.ts';

export const ids = {
  site: 'site',
  zone: 'zone',
  quantity: 'quantity',
  request: 'request',
  tags: 'tags',
};

// Block helpers

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

const quantity = {
  type: 'input',
  block_id: ids.quantity,
  label: plain('Total Quantity'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    max_length: 2,
    placeholder: plain('0'),
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
    placeholder: plain('- Describe'),
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
  header(':office: Place'),
  site,
  zone,
  header(':label: Need'),
  quantity,
  request,
  divider,
  tags,
];

export default signageBlocks;
