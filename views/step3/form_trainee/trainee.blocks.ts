import { today } from '../../../helpers/helpers.ts';

export const ids = {
  trainee: 'trainee',
  trainDate: 'train-date',
  listTrainScope: 'list-train-scope',
  listTrainNext: 'list-train-next',
  listWentWell: 'list-went-well',
};

// Helper for text object
const plain = (text: string) => ({ text, type: 'plain_text' });

const trainee = {
  type: 'input',
  block_id: ids.trainee,
  label: plain('Operator'),
  element: {
    type: 'multi_users_select',
    action_id: 'action',
    max_selected_items: 1,
    placeholder: plain('Select'),
  },
};

const trainDate = {
  type: 'input',
  block_id: ids.trainDate,
  label: plain('Training Date'),
  element: {
    type: 'datepicker',
    action_id: 'action',
    initial_date: today(),
    placeholder: plain('Select'),
  },
};

const listTrainScope = {
  type: 'input',
  block_id: ids.listTrainScope,
  label: plain('Training Covered'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    multiline: true,
    placeholder: plain('- Item\n- Item'),
  },
};

const listTrainNext = {
  type: 'input',
  block_id: ids.listTrainNext,
  label: plain('Areas of Opportunity'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    multiline: true,
    placeholder: plain('- Item\n- Item'),
  },
};

const listWentWell = {
  type: 'input',
  block_id: ids.listWentWell,
  label: plain('What Went Well'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    multiline: true,
    placeholder: plain('- Item\n- Item'),
  },
};

const traineeBlocks = [
  trainee,
  trainDate,
  listTrainScope,
  listTrainNext,
  listWentWell,
];

export default traineeBlocks;
