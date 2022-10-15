import constants from '../../constants/constants.ts';

export const deprecationBlock = {
  type: 'section',
  text: {
    type: 'mrkdwn',
    text: constants.slackDeprecated.view3Notice,
  },
};
