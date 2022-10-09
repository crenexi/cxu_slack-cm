import constants from '../../../constants/constants.ts';

const infoDeprecationBlock = {
  type: 'section',
  text: {
    type: 'mrkdwn',
    text: constants.slackDeprecated.view1Notice,
  },
};

export default infoDeprecationBlock;
