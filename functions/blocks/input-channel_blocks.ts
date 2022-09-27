type Props = {
  currentChannel: string | undefined;
};

const inputChannelBlocks = ({ currentChannel }: Props) => [
  {
    type: 'section',
    text: {
      type: 'plain_text',
      text: 'Sending message to:',
      emoji: true,
    },
  },
  {
    type: 'actions',
    elements: [
      {
        type: 'conversations_select',
        placeholder: {
          type: 'plain_text',
          text: 'Select site channel',
        },
        filter: {
          include: ['public', 'private'],
        },
        initial_conversation: currentChannel,
        action_id: 'input_channel',
      },
    ],
  },
];

export default inputChannelBlocks;
