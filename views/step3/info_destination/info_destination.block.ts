type Props = {
  destConvoName: string | undefined;
};

const infoDestinationBlock = ({ destConvoName }: Props) => {
  return [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `Message will send to # *${destConvoName}*`,
      },
    },
  ];
};

export default infoDestinationBlock;
