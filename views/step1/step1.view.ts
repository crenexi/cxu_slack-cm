import constants from '../../constants/constants.ts';
import templateBlocks from './form_template/template.block.ts';

// Helpers
const plain = (text: string) => ({ text, type: 'plain_text' });

const footnote = {
  type: 'context',
  elements: [plain(constants.slackDeprecated.view1Notice)],
};

const step1View = () => ({
  type: 'modal',
  callback_id: 'step1', // used to route events to handlers
  notify_on_close: true, // triggers view_closed events
  title: plain('Compose Message'),
  close: plain('Cancel'),
  submit: plain('Next'),
  blocks: [
    templateBlocks,
    footnote,
  ],
});

export default step1View;
