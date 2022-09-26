const blocks = [
  {
    type: 'input',
    block_id: 'view2_test',
    element: {
      type: 'plain_text_input',
      action_id: 'view2_test',
      multiline: true,
      placeholder: {
        type: 'plain_text',
        text: 'Test 2 placeholder...',
      },
    },
    label: {
      type: 'plain_text',
      text: 'Test 2 Entry',
    },
  },
];

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
    text: 'Send Message',
  },
};

export default view2;
