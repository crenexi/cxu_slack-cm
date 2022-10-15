import { Template } from '../types/types.ts';
import { divider, plain } from '../helpers/helpers.ts';
import { errorView } from '../blocks/error/error.view.ts';
import { errorBlock } from '../blocks/error/error.block.ts';
import { deprecationBlock } from '../blocks/info_deprecation/deprecation.block.ts';
import { destinationBlock } from '../blocks/info_destination/destination.block.ts';

import { signageBlocks } from '../blocks/form_signage/signage.blocks.ts';
import { equipmentBlocks } from '../blocks/form_equipment/equipment.blocks.ts';
import { traineeBlocks } from '../blocks/form_trainee/trainee.blocks.ts';
import { qcStartingBlocks } from '../blocks/form_qc-starting/qc-starting.blocks.ts';
import { qcRemarksBlocks } from '../blocks/form_qc-remarks/qc-remarks.blocks.ts';
import { orderBlocks } from '../blocks/form_order/order.blocks.ts';
import { droBlocks } from '../blocks/form_dro/dro.blocks.ts';

type Props = {
  template: Template | undefined;
  destConvo: {
    id: string | undefined;
    name: string | undefined;
  };
};

const templateBlocks = (template: Template) => {
  switch (template.key) {
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
    case 'order':
      return orderBlocks;
    case 'dro':
      return droBlocks;
    default:
      return [errorBlock('No case defined for this template')];
  }
};

export const step3View = ({ template, destConvo }: Props) => {
  const private_metadata = JSON.stringify({ destConvo, template });
  const destConvoName = destConvo.name;

  if (!template) {
    console.error('Template key not found in constants');
    return errorView;
  }

  // For Slack-deprecated templates, show disclaimer
  const slackDeprecated = !template.isSlackDeprecated ? [] : [
    deprecationBlock,
    divider,
  ];

  return {
    private_metadata,
    type: 'modal',
    callback_id: 'step3', // used to route events to handlers
    notify_on_close: true, // triggers view_closed events
    title: plain(template.title),
    close: plain('Cancel'),
    submit: plain('Send'),
    blocks: [
      ...slackDeprecated,
      ...templateBlocks(template),
      divider,
      ...destinationBlock({ destConvoName }),
    ],
  };
};
