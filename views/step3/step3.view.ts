import { Template } from '../../constants/templates.ts';
import errorView from '../error/error.view.ts';
import errorBlock from '../error/error.block.ts';
import headerBlocks from './modal_header/modal-header.blocks.ts';
import footerBlocks from './modal_footer/modal-footer.blocks.ts';
import orderBlocks from './form_order/order.blocks.ts';
import expiredBlocks from './form_expired/expired.blocks.ts';
import traineeBlocks from './form_trainee/trainee.blocks.ts';

type Props = {
  channel: string | undefined;
  channelName: string | undefined;
  template: Template;
};

// Helpers
const dividerBlock = { type: 'divider' };
const plain = (text: string) => ({ text, type: 'plain_text' });

const templateBlocks = (template: Template) => {
  switch (template.key) {
    case 'order':
      return orderBlocks;
    case 'expired':
      return expiredBlocks;
    case 'trainee':
      return traineeBlocks;
    default:
      return [errorBlock('No case defined for this template')];
  }
};

const step3View = ({ channel, channelName, template }: Props) => {
  const private_metadata = JSON.stringify({ channel, template });

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
      // ...headerBlocks({ template }),
      // dividerBlock,
      ...templateBlocks(template),
      dividerBlock,
      ...footerBlocks({ channelName, template }),
    ],
  };
};

export default step3View;
