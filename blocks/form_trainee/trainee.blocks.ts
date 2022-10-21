import ids from '../../constants/block-ids.ts';
import { header, plain, today } from '../../helpers/helpers.ts';

const operator = {
  type: 'input',
  block_id: ids.trainee.operator,
  label: plain('Operator'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    placeholder: plain('Select'),
  },
};

const trainDate = {
  type: 'input',
  block_id: ids.trainee.trainDate,
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
  block_id: ids.trainee.listTrainScope,
  label: plain('Training Covered'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    multiline: true,
    placeholder: plain('- Item'),
  },
};

const listTrainNext = {
  type: 'input',
  block_id: ids.trainee.listTrainNext,
  label: plain('Areas of Opportunity'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    multiline: true,
    placeholder: plain('- Item'),
  },
};

const listWentWell = {
  type: 'input',
  block_id: ids.trainee.listWentWell,
  label: plain('What Went Well'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    multiline: true,
    placeholder: plain('- Item'),
  },
};

export const traineeBlocks = [
  trainDate,
  operator,
  header('Review :book:'),
  listTrainScope,
  listTrainNext,
  listWentWell,
];
