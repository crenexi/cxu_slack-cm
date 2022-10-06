import { Template } from '../../constants/templates.ts';
import channelBlocks from './form_channel/channel.block.ts';
import footerBlocks from './model_footer/model-footer.block.ts';

type Props = {
  activeChannel: string | undefined;
  template: Template | undefined;
};

// Helpers
const plain = (text: string) => ({ text, type: 'plain_text' });

const step1View = ({ activeChannel, template }: Props) => {
  const private_metadata = JSON.stringify({ template });
  const title = !template ? '' : template.title;

  return {
    private_metadata,
    type: 'modal',
    callback_id: 'step2',
    notify_on_close: true,
    title: plain(title),
    close: plain('Cancel'),
    submit: plain('Next'),
    blocks: [
      channelBlocks({ activeChannel }),
      ...footerBlocks({ template }),
    ],
  };
};

export default step1View;
