import constants from '../../../constants/constants.ts';

const infoDeprecationBlock = {
  type: 'section',
  text: {
    type: 'mrkdwn',
    text: constants.slackDeprecated.firstWarning,
  },
};

export default infoDeprecationBlock;
