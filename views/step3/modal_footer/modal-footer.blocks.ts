type Props = {
  channelName: string | undefined;
};

const modalFooterBlocks = ({ channelName }: Props) => [
  {
    type: 'context',
    elements: [
      {
        type: 'mrkdwn',
        text: `Message will send to # *${channelName}*`,
      },
    ],
  },
];

export default modalFooterBlocks;
