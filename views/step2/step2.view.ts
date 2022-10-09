import { Template } from '../../constants/templates.ts';
import convoBlock from './form_convo/convo.block.ts';
import channelTipBlock from './info_channel-tip/info_channel-tip.block.ts';
import infoDeprecationBlock from './info_deprecation/info_deprecation.block.ts';

type Props = {
  initialConvo: string | undefined;
  template: Template | undefined;
};

// Helpers
const plain = (text: string) => ({ text, type: 'plain_text' });
const divider = { type: 'divider' };

const step1View = ({ initialConvo, template }: Props) => {
  const private_metadata = JSON.stringify({ template });
  const title = !template ? '' : template.title;
  const isSlackDeprecated = !template ? false : template.isSlackDeprecated;

  return {
    private_metadata,
    type: 'modal',
    callback_id: 'step2',
    notify_on_close: true,
    title: plain(title),
    close: plain('Cancel'),
    submit: plain('Next'),
    blocks: [
      convoBlock({ initialConvo }),
      channelTipBlock({ template }),
      ...(!isSlackDeprecated ? [] : [
        divider,
        infoDeprecationBlock,
      ]),
    ],
  };
};

export default step1View;
