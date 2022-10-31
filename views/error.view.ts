import { plain } from '../helpers/helpers.ts';
import { errorBlocks } from '../blocks/error/error.block.ts';

type Props = {
  text?: string;
};

export const errorView = ({ text }: Props = {}) => ({
  type: 'modal',
  callback_id: 'error', // used to route events to handlers
  notify_on_close: true, // triggers view_closed events
  title: plain('Compose Message'),
  close: plain('Close'),
  blocks: [...errorBlocks(text)],
});
