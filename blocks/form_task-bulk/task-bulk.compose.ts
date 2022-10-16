import ids from '../../constants/block-ids.ts';
import { Compose } from '../../types/types.ts';
import { taskBulkTemplate } from './task-bulk.template.ts';

export const taskBulkCompose: Compose = ({ values }) => {
  return taskBulkTemplate({});
};
