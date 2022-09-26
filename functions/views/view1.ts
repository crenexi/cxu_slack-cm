import blocks from '../blocks/view1-blocks.ts';

const view1 = {
  blocks,
  type: 'modal',
  callback_id: 'view1', // used to route events to handlers
  notify_on_close: true, // triggers view_closed events
  title: {
    type: 'plain_text',
    text: 'Select Template',
  },
  submit: {
    type: 'plain_text',
    text: 'Next',
  },
};

export default view1;
