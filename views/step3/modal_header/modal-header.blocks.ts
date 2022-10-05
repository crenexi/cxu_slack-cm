import { Template } from '../../../constants/templates.ts';

type Props = {
  template: Template;
};

const modalHeaderBlocks = ({ template }: Props) => {
  const { key, title, moreLink } = template;

  return [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: title,
      },
    },
    {
      type: 'section',
      text: {
        type: 'plain_text',
        text: 'More instructions for this template',
      },
      accessory: {
        type: 'button',
        text: {
          type: 'plain_text',
          text: 'View Instructions ↗️',
          emoji: true,
        },
        value: key,
        action_id: `button_more-${key}`,
        url: moreLink,
      },
    },
  ];
};

export default modalHeaderBlocks;
