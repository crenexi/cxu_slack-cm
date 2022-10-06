import { Template } from '../../../constants/templates.ts';

type Props = {
  channelName: string | undefined;
  template: Template;
};

const modalHeaderBlocks = ({ channelName, template }: Props) => {
  const { key, moreLink } = template;

  return [
    {
      type: 'actions',
      elements: [
        {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'More Instructions :link:',
            emoji: true,
          },
          value: key,
          action_id: 'button_more',
          url: moreLink,
        },
      ],
    },
    // {
    //   type: 'context',
    //   elements: [
    //     {
    //       type: 'mrkdwn',
    //       text: `Message will send to #${channelName}`,
    //     },
    //   ],
    // },
  ];
};

export default modalHeaderBlocks;
