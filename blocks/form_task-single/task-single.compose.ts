import ids from '../../constants/block-ids.ts';
import { Compose } from '../../types/types.ts';
import { selValById, textValById } from '../../helpers/helpers.ts';
import { taskSingleTemplate } from './task-single.template.ts';

export const taskSingleCompose: Compose = ({ values }) => {
  const timingId = values[ids.taskSingle.timing];
  const timingText = timingId.action.selected_option.text.text;
  const taskNote = values[ids.taskSingle.taskNote];

  return taskSingleTemplate({
    actionType: selValById(values[ids.taskSingle.actionType]),
    taskRequest: textValById(values[ids.taskSingle.taskRequest]),
    taskZone: textValById(values[ids.taskSingle.taskZone]),
    taskNote: textValById(taskNote, { default: '' }),
    timing: timingText.toLowerCase(),
  });
};
