type Props = {
  initialConvo: string | undefined;
};

export const ids = {
  input_convo_block: 'input_convo',
  input_convo_action: 'input_convo_action',
};

// deno-lint-ignore no-explicit-any
export const selectedConvo = ({ state }: any) => {
  try {
    const block = state.values[ids.input_convo_block];
    const action = block[ids.input_convo_action];
    return action.selected_conversation;
  } catch (err) {
    console.error(err);
  }
};

const convoBlock = ({ initialConvo }: Props) => ({
  type: 'input',
  block_id: ids.input_convo_block,
  label: {
    type: 'plain_text',
    text: 'Channel',
  },
  element: {
    type: 'conversations_select',
    placeholder: {
      type: 'plain_text',
      text: 'Select channel',
    },
    filter: {
      include: ['public', 'private'],
    },
    initial_conversation: initialConvo,
    action_id: ids.input_convo_action,
  },
});

export default convoBlock;
