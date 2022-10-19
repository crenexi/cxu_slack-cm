import ids from '../../constants/block-ids.ts';
import { Compose } from '../../types/types.ts';
import { textValById } from '../../helpers/helpers.ts';
import { taskRefPicTemplate } from './task-ref-pic.template.ts';

export const taskRefPicCompose: Compose = ({ values }) => {
  const picsLink = values[ids.taskRefPic.picsLink];
  const currPicId = values[ids.taskRefPic.currPic];
  const currPicText = currPicId.action.selected_option.text.text;

  return taskRefPicTemplate({
    site: textValById(values[ids.taskRefPic.site]),
    zone: textValById(values[ids.taskRefPic.zone]),
    task: textValById(values[ids.taskRefPic.task]),
    picsLink: textValById(picsLink, { default: '' }),
    currPic: currPicText.toLowerCase(),
  });
};
