import { Template } from '../../constants/templates.ts';
import { plain } from '../../helpers/helpers.ts';
import convoBlock from './form_convo/convo.block.ts';
import channelTipBlock from './info_channel-tip/info_channel-tip.block.ts';

type Props = {
  initialConvo: string | undefined;
  template: Template | undefined;
};

const step1View = ({ initialConvo, template }: Props) => {
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
      convoBlock({ initialConvo }),
      channelTipBlock({ template }),
    ],
  };
};

export default step1View;
