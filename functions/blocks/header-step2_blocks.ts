import { Template } from '../../constants/constants.ts';

type Props = {
  template: Template;
};

const headerStep2Blocks = ({ template }: Props) => {
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

export default headerStep2Blocks;