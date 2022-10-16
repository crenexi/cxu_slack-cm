import ids from '../../constants/block-ids.ts';
import { Compose } from '../../types/types.ts';
import { taskSingleTemplate } from './task-single.template.ts';

export const taskSingleCompose: Compose = ({ values }) => {
  return taskSingleTemplate({});
};
