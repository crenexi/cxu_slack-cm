import errorBlock from './error.block.ts';

const errorView = ({
  type: 'modal',
  callback_id: 'error',
  notify_on_close: true,
  title: {
    type: 'plain_text',
    text: 'Compose Message',
  },
  blocks: [errorBlock()],
});

export default errorView;
