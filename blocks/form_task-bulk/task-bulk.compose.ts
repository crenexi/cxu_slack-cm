import ids from '../../constants/block-ids.ts';
import { Compose } from '../../types/types.ts';
import { textValById } from '../../helpers/helpers.ts';
import { taskBulkTemplate } from './task-bulk.template.ts';

export const taskBulkCompose: Compose = ({ values }) => {
  const toAdd = values[ids.taskBulk.toAdd];
  const toRemove = values[ids.taskBulk.toRemove];
  const toUpdate = values[ids.taskBulk.toUpdate];
  const toReorder = values[ids.taskBulk.toReorder];
  const refPicsLink = values[ids.taskBulk.refPicsLink];

  return taskBulkTemplate({
    toAdd: textValById(toAdd, { default: '' }),
    toRemove: textValById(toRemove, { default: '' }),
    toUpdate: textValById(toUpdate, { default: '' }),
    toReorder: textValById(toReorder, { default: '' }),
    refPicsLink: textValById(refPicsLink, { default: '' }),
  });
};
