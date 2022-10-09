import { Template } from '../../constants/templates.ts';
import errorView from '../error/error.view.ts';
import errorBlock from '../error/error.block.ts';
import infoDestinationBlock from './info_destination/info_destination.block.ts';
import orderBlocks from './form_order/order.blocks.ts';
import traineeBlocks from './form_trainee/trainee.blocks.ts';

type Props = {
  template: Template;
  destConvo: {
    id: string | undefined;
    name: string | undefined;
  };
};

// Helpers
const dividerBlock = { type: 'divider' };
const plain = (text: string) => ({ text, type: 'plain_text' });

const templateBlocks = (template: Template) => {
  switch (template.key) {
    case 'dro':
      return [];
    case 'order':
      return orderBlocks;
    case 'trainee':
      return traineeBlocks;
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
      dividerBlock,
      ...infoDestinationBlock({ destConvoName }),
    ],
  };
};

export default step3View;
