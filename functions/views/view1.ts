const blocks = [
  {
    type: 'input',
    block_id: 'view1_test',
    element: {
      type: 'plain_text_input',
      action_id: 'view1_test',
      multiline: true,
      placeholder: {
        type: 'plain_text',
        text: 'Test placeholder...',
      },
    },
    label: {
      type: 'plain_text',
      text: 'Test Entry',
    },
  },
];

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
