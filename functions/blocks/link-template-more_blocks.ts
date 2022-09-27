import { Template } from '../../constants/constants.ts';

const linkTemplateMore = (template: Template) => {
  const { key, title, moreLink } = template;

  return [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `Full instructions for the "${title}" template`,
      },
      accessory: {
        type: 'button',
        text: {
          type: 'plain_text',
          text: 'View Instructions',
        },
        value: key,
        action_id: `button_more-${key}`,
        url: moreLink,
      },
    },
  ];
};

export default linkTemplateMore;
