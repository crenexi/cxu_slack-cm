type Props = {
  channel: string | undefined;
};

const inputChannelBlocks = ({ channel }: Props) => [
  {
    type: 'input',
    label: {
      type: 'plain_text',
      text: 'Channel',
    },
    element: {
      type: 'conversations_select',
      placeholder: {
        type: 'plain_text',
        text: 'Select site channel',
      },
      filter: {
        include: ['public', 'private'],
      },
      initial_conversation: channel,
      action_id: 'input_channel',
    },
  },
];

export default inputChannelBlocks;
