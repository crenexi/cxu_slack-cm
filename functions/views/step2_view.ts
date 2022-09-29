import { Template, templates } from '../../constants/constants.ts';
import errorView from './error_view.ts';
import headerStep2Blocks from '../blocks/header-step2_blocks.ts';
import contextChannelBlocks from '../blocks/context-channel_blocks.ts';
import inputExpiredBlocks from '../blocks/input-expired_blocks.ts';

type Props = {
  channel: string | undefined;
  channelName: string | undefined;
  templateKey: string | undefined;
};

const dividerBlock = { type: 'divider' };

const templateBlocks = (template: Template) => {
  switch (template.key) {
    case 'dro':
      return inputExpiredBlocks;
    default:
      return [
        {
          type: 'section',
          text: {
            type: 'plain_text',
            text: 'No case defined for this template',
          },
        },
      ];
  }
};

const step2View = ({ channel, channelName, templateKey }: Props) => {
  const template = templates.find(({ key }) => key === templateKey);
  const templateEmoji = template?.emoji;
  const data = JSON.stringify({ channel, template });

  if (!template) {
    console.error('Template key not found in constants');
    return errorView;
  }

  return {
    type: 'modal',
    callback_id: 'step2', // used to route events to handlers
    notify_on_close: true, // triggers view_closed events
    private_metadata: data,
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
      ...headerStep2Blocks({ template }),
      dividerBlock,
      ...templateBlocks(template),
      dividerBlock,
      ...contextChannelBlocks({ templateEmoji, channelName }),
    ],
  };
};

export default step2View;
