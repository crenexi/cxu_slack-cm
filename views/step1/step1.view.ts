import templateBlocks from './form_template/template.block.ts';
import infoDeprecationBlock from './info_deprecation/info_deprecation.block.ts';

// Helpers
const plain = (text: string) => ({ text, type: 'plain_text' });
const divider = { type: 'divider' };

const step1View = () => ({
  type: 'modal',
  callback_id: 'step1', // used to route events to handlers
  notify_on_close: true, // triggers view_closed events
  title: plain('Compose Message'),
  close: plain('Cancel'),
  submit: plain('Next'),
  blocks: [
    templateBlocks,
    divider,
    infoDeprecationBlock,
  ],
});

export default step1View;
