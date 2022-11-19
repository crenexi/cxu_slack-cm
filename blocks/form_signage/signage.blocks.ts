import ids from '../../constants/block-ids.ts';
import { divider, header, plain } from '../../helpers/helpers.ts';

const site = {
  type: 'input',
  block_id: ids.signage.site,
  label: plain('Location/Client'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    max_length: 300,
    placeholder: plain('Block Market'),
  },
};

const zone = {
  type: 'input',
  block_id: ids.signage.zone,
  label: plain('Floor/Zone'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    max_length: 300,
    placeholder: plain('L7 Kitchen'),
  },
};

const quantity = {
  type: 'input',
  block_id: ids.signage.quantity,
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
  block_id: ids.signage.request,
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
  block_id: ids.signage.tags,
  label: plain('Tags'),
  optional: true,
  element: {
    type: 'multi_users_select',
    action_id: 'action',
    placeholder: plain('Select'),
  },
};

export const signageBlocks = [
  header('Place :office:'),
  site,
  zone,
  header('Need :label:'),
  quantity,
  request,
  divider,
  tags,
];
