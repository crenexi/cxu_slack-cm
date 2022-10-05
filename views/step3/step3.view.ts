import { Template } from '../../constants/templates.ts';
import errorView from '../error/error.view.ts';
import errorBlock from '../error/error.block.ts';
import headerBlocks from './modal_header/modal-header.blocks.ts';
import footerBlocks from './modal_footer/modal-footer.blocks.ts';
import droBlocks from './form_dro/dro.blocks.ts';
import orderBlocks from './form_order/order.blocks.ts';
import expiredBlocks from './form_expired/expired.blocks.ts';
import traineeBlocks from './form_trainee/trainee.blocks.ts';

type Props = {
  channel: string | undefined;
  channelName: string | undefined;
  template: Template;
};

const dividerBlock = { type: 'divider' };

const templateBlocks = (template: Template) => {
  switch (template.key) {
    case 'dro':
      return droBlocks;
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
  const templateEmoji = template?.emojiKey;
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
    title: {
      type: 'plain_text',
      text: 'Compose Message',
    },
    close: {
      type: 'plain_text',
      text: 'Cancel',
    },
    submit: {
      type: 'plain_text',
      text: 'Send Message',
    },
    blocks: [
      ...headerBlocks({ template }),
      dividerBlock,
      ...templateBlocks(template),
      dividerBlock,
      ...footerBlocks({ templateEmoji, channelName }),
    ],
  };
};

export default step3View;
