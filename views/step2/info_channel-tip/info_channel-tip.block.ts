import { Template } from '../../../constants/templates.ts';

type Props = {
  template: Template | undefined;
};

const infoChannelTipBlock = ({ template }: Props) => ({
  type: 'context',
  elements: [
    {
      type: 'mrkdwn',
      text: template?.channelTip,
    },
  ],
});

export default infoChannelTipBlock;
