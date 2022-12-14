import { Template } from '../types/types.ts';
import { divider, plain } from '../helpers/helpers.ts';
import { errorView } from '../blocks/error/error.view.ts';
import { errorBlocks } from '../blocks/error/error.block.ts';
import { destinationBlock } from '../blocks/info_destination/destination.block.ts';

import { taskSingleBlocks } from '../blocks/form_task-single/task-single.blocks.ts';
import { taskBulkBlocks } from '../blocks/form_task-bulk/task-bulk.blocks.ts';
import { taskRefPicBlocks } from '../blocks/form_task-ref-pic/task-ref-pic.blocks.ts';
import { signageBlocks } from '../blocks/form_signage/signage.blocks.ts';
import { equipmentBlocks } from '../blocks/form_equipment/equipment.blocks.ts';
import { traineeBlocks } from '../blocks/form_trainee/trainee.blocks.ts';
import { qcStartingBlocks } from '../blocks/form_qc-starting/qc-starting.blocks.ts';
import { qcRemarksBlocks } from '../blocks/form_qc-remarks/qc-remarks.blocks.ts';

type Props = {
  template: Template | undefined;
  destConvo: {
    id: string | undefined;
    name: string | undefined;
  };
};

const templateBlocks = (template: Template) => {
  switch (template.key) {
    case 'taskSingle':
      return taskSingleBlocks;
    case 'taskBulk':
      return taskBulkBlocks;
    case 'taskRefPic':
      return taskRefPicBlocks;
    case 'equipment':
      return equipmentBlocks;
    case 'signage':
      return signageBlocks;
    case 'trainee':
      return traineeBlocks;
    case 'qcStarting':
      return qcStartingBlocks;
    case 'qcRemarks':
      return qcRemarksBlocks;
    default:
      return [...errorBlocks('No case defined for this template')];
  }
};

export const step3View = ({ template, destConvo }: Props) => {
  const private_metadata = JSON.stringify({ destConvo, template });
  const destConvoName = destConvo.name;

  if (!template) {
    console.error('Template key not found in constants');
    return errorView;
  }

  return {
    private_metadata,
    type: 'modal',
    callback_id: 'step3', // used to route events to handlers
    notify_on_close: true, // triggers view_closed events
    title: plain(template.title),
    close: plain('Cancel'),
    submit: plain('Send'),
    blocks: [
      ...templateBlocks(template),
      divider,
      ...destinationBlock({ destConvoName }),
    ],
  };
};
