import ids from '../../constants/block-ids.ts';
import { plain } from '../../helpers/helpers.ts';

const pretext = {
  type: 'section',
  block_id: ids.taskBulk.pretext,
  text: plain('TODO'),
};

export const taskSingleBlocks = [
  pretext,
];
