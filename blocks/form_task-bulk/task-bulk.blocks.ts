import ids from '../../constants/block-ids.ts';
import { header, plain } from '../../helpers/helpers.ts';

const pretext = {
  type: 'section',
  block_id: ids.taskBulk.pretext,
  text: plain('TODO'),
};

export const taskBulkBlocks = [
  pretext,
  header(':new: Add'),
  header(':end: Remove'),
  header(':arrows_counterclockwise: Update'),
  header(':arrow_up_down: Order'),
];
