const errorView = ({
  type: 'modal',
  callback_id: 'error',
  notify_on_close: true,
  title: {
    type: 'plain_text',
    text: 'Compose Message',
  },
  blocks: [
    {
      type: 'section',
      text: {
        type: 'plain_text',
        text: 'Error: something went wrong',
      },
    },
  ],
});

export default errorView;
