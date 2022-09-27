import inputChannelBlocks from '../blocks/input-channel_blocks.ts';

type View2Props = {
  currentChannel: string | undefined;
  templateKey: string | undefined;
};

const view2 = ({ currentChannel }: View2Props) => ({
  type: 'modal',
  callback_id: 'view2', // used to route events to handlers
  notify_on_close: true, // triggers view_closed events
  title: {
    type: 'plain_text',
    text: 'Compose Message',
  },
  blocks: [
    ...inputChannelBlocks({ currentChannel }),
  ],
  submit: {
    type: 'plain_text',
    text: 'Send Message',
  },
});

export default view2;
