import { Template } from '../../types/types.ts';

type Props = {
  template: Template | undefined;
};

export const channelTipBlock = ({ template }: Props) => ({
  type: 'context',
  elements: [
    {
      type: 'mrkdwn',
      text: template?.channelTip,
    },
  ],
});
