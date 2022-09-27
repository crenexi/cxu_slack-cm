import { templates } from '../../constants/constants.ts';
import headerStep2Blocks from '../blocks/header-step2_blocks.ts';
import inputChannelBlocks from '../blocks/input-channel_blocks.ts';
import errorView from './error_view.ts';

type Step2Props = {
  currentChannel: string | undefined;
  templateKey: string | undefined;
};

const dividerBlock = { type: 'divider' };

const step2View = ({ currentChannel, templateKey }: Step2Props) => {
  const template = templates.find(({ key }) => key === templateKey);

  if (!template) {
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
    submit: {
      type: 'plain_text',
      text: 'Send Message',
    },
    blocks: [
      ...headerStep2Blocks({ template }),
      dividerBlock,
      ...inputChannelBlocks({ currentChannel }),
      dividerBlock,
    ],
  };
};

export default step2View;
