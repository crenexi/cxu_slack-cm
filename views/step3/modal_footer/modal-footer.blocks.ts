import { Template } from '../../../constants/templates.ts';

type Props = {
  channelName: string | undefined;
  template: Template;
};

const modalFooterBlocks = ({ channelName }: Props) => {
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

export default modalFooterBlocks;
