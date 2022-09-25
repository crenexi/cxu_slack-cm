const blocks = [
  {
    type: 'input',
    block_id: 'section1',
    element: {
      type: 'plain_text_input',
      action_id: 'flow-choose_input',
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

export default blocks;
