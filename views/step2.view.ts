import ids from '../constants/block-ids.ts';
import { Template } from '../types/types.ts';
import { plain } from '../helpers/helpers.ts';
import { convoBlock } from '../blocks/form_convo/convo.block.ts';
import { channelTipBlock } from '../blocks/info_channel-tip/channel-tip.block.ts';

type Props = {
  initialConvo: string | undefined;
  template: Template | undefined;
};

// deno-lint-ignore no-explicit-any
export const selectedConvo = ({ state }: any) => {
  try {
    const block = state.values[ids.conversation];
    return block.action.selected_conversation;
  } catch (err) {
    console.error(err);
  }
};

export const step2View = ({ initialConvo, template }: Props) => {
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
