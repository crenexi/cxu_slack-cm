import { templates } from '../../constants/constants.ts';
import inputChannelBlocks from '../blocks/input-channel_blocks.ts';
import errorView from './error_view.ts';

type Step2Props = {
  currentChannel: string | undefined;
  templateKey: string | undefined;
};

const step2View = ({ currentChannel, templateKey }: Step2Props) => {
  const templateExists = templates.some(({ key }) => 'test' === templateKey);

  if (!templateExists) {
    console.error('Template key not found in constants');
    return errorView;
  }

  return {
    type: 'modal',
    callback_id: 'step2', // used to route events to handlers
    notify_on_close: true, // triggers view_closed events
    title: {
      type: 'plain_text',
      text: 'Compose Message',
    },
    // submit: {
    //   type: 'plain_text',
    //   text: 'Send Message',
    // },
    blocks: [
      ...inputChannelBlocks({ currentChannel }),
    ],
  };
};

export default step2View;
