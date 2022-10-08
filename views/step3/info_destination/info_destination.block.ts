type Props = {
  channelName: string | undefined;
};

const infoDestinationBlock = ({ channelName }: Props) => {
  return [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `Message will send to # *${channelName}*`,
      },
    },
  ];
};

export default infoDestinationBlock;
