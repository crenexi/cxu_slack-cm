import { HandleCompose } from '../types/types.ts';
import { formatDate } from '../helpers/helpers.ts';
import { taskSingleCompose } from '../blocks/form_task-single/task-single.compose.ts';
import { taskBulkCompose } from '../blocks/form_task-bulk/task-bulk.compose.ts';
import { taskRefPicCompose } from '../blocks/form_task-ref-pic/task-ref-pic.compose.ts';
import { signageCompose } from '../blocks/form_signage/signage.compose.ts';
import { equipmentCompose } from '../blocks/form_equipment/equipment.compose.ts';
import { qcStartingCompose } from '../blocks/form_qc-starting/qc-starting.compose.ts';
import { qcRemarksCompose } from '../blocks/form_qc-remarks/qc-remarks.compose.ts';
import { traineeCompose } from '../blocks/form_trainee/trainee.compose.ts';

export const handleCompose: HandleCompose = (props) => {
  const { user, template, values } = props;
  // console.log(values);

  const { title, emojiKey } = template;

  // Construct the header
  const subtitle = `\n:${emojiKey}: | By <@${user?.trim()}> | ${formatDate()}`;
  const displayTitle = title.toUpperCase().replaceAll('SEND ', '');
  const header = `*${displayTitle}*${subtitle}\n----------`;

  // Construct the body
  const body: string = (() => {
    switch (template.key) {
      case 'taskSingle':
        return taskSingleCompose({ values });
      case 'taskBulk':
        return taskBulkCompose({ values });
      case 'taskRefPic':
        return taskRefPicCompose({ values });
      case 'signage':
        return signageCompose({ values });
      case 'equipment':
        return equipmentCompose({ values });
      case 'trainee':
        return traineeCompose({ values });
      case 'qcStarting':
        return qcStartingCompose({ values });
      case 'qcRemarks':
        return qcRemarksCompose({ values });
      default: {
        return 'No case found for this template key.';
      }
    }
  })();

  return `${header}\n${body.trim()}`;
};
