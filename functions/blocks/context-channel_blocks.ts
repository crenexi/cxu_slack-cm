type Props = {
  templateEmoji: string | undefined;
  channelName: string | undefined;
};

const contextChannelBlocks = ({ templateEmoji, channelName }: Props) => [
  {
    type: 'context',
    elements: [
      {
        type: 'mrkdwn',
        text: `${templateEmoji} | Sending to #${channelName}`,
      },
    ],
  },
];

export default contextChannelBlocks;
