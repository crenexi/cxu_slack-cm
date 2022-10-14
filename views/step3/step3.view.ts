import { Template } from '../../constants/templates.ts';
import { divider, plain } from '../../helpers/helpers.ts';
import errorView from '../error/error.view.ts';
import errorBlock from '../error/error.block.ts';
import infoDeprecationBlock from './info_deprecation/info_deprecation.block.ts';
import infoDestinationBlock from './info_destination/info_destination.block.ts';

import signageBlocks from './form_signage/signage.blocks.ts';
import equipmentBlocks from './form_equipment/equipment.blocks.ts';
import traineeBlocks from './form_trainee/trainee.blocks.ts';
import qcStartingBlocks from './form_qc-starting/qc-starting.blocks.ts';
import orderBlocks from './form_order/order.blocks.ts';
import droBlocks from './form_dro/dro.blocks.ts';

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
    case 'order':
      return orderBlocks;
    case 'dro':
      return droBlocks;
    default:
      return [errorBlock('No case defined for this template')];
  }
};

const step3View = ({ template, destConvo }: Props) => {
  const private_metadata = JSON.stringify({ destConvo, template });
  const destConvoName = destConvo.name;

  if (!template) {
    console.error('Template key not found in constants');
    return errorView;
  }

  // For Slack-deprecated templates, show disclaimer
  const slackDeprecated = !template.isSlackDeprecated ? [] : [
    infoDeprecationBlock,
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
      ...infoDestinationBlock({ destConvoName }),
    ],
  };
};

export default step3View;
