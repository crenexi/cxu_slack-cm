import templateBlocks from './form_template/template.block.ts';

const step1View = () => ({
  type: 'modal',
  callback_id: 'step1', // used to route events to handlers
  notify_on_close: true, // triggers view_closed events
  title: {
    type: 'plain_text',
    text: 'Compose Message',
  },
  close: {
    type: 'plain_text',
    text: 'Cancel',
  },
  submit: {
    type: 'plain_text',
    text: 'Next',
  },
  blocks: [templateBlocks],
});

export default step1View;
