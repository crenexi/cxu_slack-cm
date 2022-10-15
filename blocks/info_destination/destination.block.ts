type Props = {
  destConvoName: string | undefined;
};

export const destinationBlock = ({ destConvoName }: Props) => {
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
