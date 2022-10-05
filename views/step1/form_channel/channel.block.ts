type Props = {
  channel: string | undefined;
};

export const ids = {
  input_channel_block: 'input_channel',
  input_channel_action: 'input_template_action',
};

// deno-lint-ignore no-explicit-any
export const selectedChannel = ({ state }: any) => {
  try {
    const block = state.values[ids.input_channel_block];
    const action = block[ids.input_channel_action];
    return action.selected_conversation;
  } catch (err) {
    console.error(err);
  }
};

const channelBlock = ({ channel }: Props) => ({
  type: 'input',
  block_id: ids.input_channel_block,
  label: {
    type: 'plain_text',
    text: 'Channel',
  },
  element: {
    type: 'conversations_select',
    placeholder: {
      type: 'plain_text',
      text: 'Select site channel',
    },
    filter: {
      include: ['public', 'private'],
    },
    initial_conversation: channel,
    action_id: ids.input_channel_action,
  },
});

export default channelBlock;
