import { errorBlocks } from './error.block.ts';

export const errorView = ({
  type: 'modal',
  callback_id: 'error',
  notify_on_close: true,
  title: {
    type: 'plain_text',
    text: 'Compose Message',
  },
  blocks: [...errorBlocks()],
});
