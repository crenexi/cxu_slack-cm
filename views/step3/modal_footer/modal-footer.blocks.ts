type Props = {
  channelName: string | undefined;
};

const modalFooterBlocks = ({ channelName }: Props) => [
  {
    type: 'context',
    elements: [
      {
        type: 'plain_text',
        text: `Message will send to #${channelName}`,
      },
    ],
  },
];

export default modalFooterBlocks;
