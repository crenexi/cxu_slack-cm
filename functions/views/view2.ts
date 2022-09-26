import blocks from '../blocks/view2-blocks.ts';

const view2 = {
  blocks,
  type: 'modal',
  callback_id: 'view2', // used to route events to handlers
  notify_on_close: true, // triggers view_closed events
  title: {
    type: 'plain_text',
    text: 'Build Message',
  },
  submit: {
    type: 'plain_text',
    text: 'Build & Submit',
  },
};

export default view2;
