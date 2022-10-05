import templateBlocks from './form_template/template.block.ts';
import channelBlocks from './form_channel/channel.block.ts';

type Props = {
  channel: string | undefined;
};

const dividerBlock = { type: 'divider' };

const step1View = ({ channel }: Props) => ({
  type: 'modal',
  callback_id: 'step1', // used to route events to handlers
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
    text: 'Next',
  },
  blocks: [
    templateBlocks,
    dividerBlock,
    channelBlocks({ channel }),
  ],
});

export default step1View;
