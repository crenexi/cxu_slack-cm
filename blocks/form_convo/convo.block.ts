import ids from '../../constants/block-ids.ts';

type Props = {
  initialConvo: string | undefined;
};

export const convoBlock = ({ initialConvo }: Props) => ({
  type: 'input',
  block_id: ids.conversation,
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
    action_id: 'action',
  },
});
