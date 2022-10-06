import { Template } from '../../../constants/templates.ts';

type Props = {
  template: Template;
};

const modalHeaderBlocks = ({ template }: Props) => {
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
  ];
};

export default modalHeaderBlocks;
