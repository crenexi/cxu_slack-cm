import { Template } from '../../constants/templates.ts';
import channelBlocks from './form_channel/channel.block.ts';
import footerBlocks from './model_footer/model-footer.block.ts';

type Props = {
  activeChannel: string | undefined;
  template: Template | undefined;
};

const step1View = ({ activeChannel, template }: Props) => {
  const private_metadata = JSON.stringify({ template });

  return {
    private_metadata,
    type: 'modal',
    callback_id: 'step2',
    notify_on_close: true,
    title: {
      type: 'plain_text',
      text: 'Compose Message',
    },
    close: {
      type: 'plain_text',
      text: 'Cancel',
    },
    submit: {
      type: 'plain_text',
      text: 'Next',
    },
    blocks: [
      channelBlocks({ activeChannel }),
      ...footerBlocks({ template }),
    ],
  };
};

export default step1View;
