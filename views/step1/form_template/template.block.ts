import templates from '../../../constants/templates.ts';

export const ids = {
  input_template_block: 'input_template',
  input_template_action: 'input_template_action',
};

// deno-lint-ignore no-explicit-any
export const selectedTemplate = ({ state }: any) => {
  try {
    const block = state.values[ids.input_template_block];
    const action = block[ids.input_template_action];
    return action.selected_option.value;
  } catch (err) {
    console.error(err);
  }
};

const templateOptions = templates
  .filter(({ isEnabled }) => isEnabled)
  .map(({ key, title, emojiKey }) => {
    return {
      text: {
        type: 'plain_text',
        text: `:${emojiKey}: ${title}`,
        emoji: true,
      },
      value: key,
    };
  });

const templateBlock = ({
  type: 'input',
  block_id: ids.input_template_block,
  label: {
    type: 'plain_text',
    text: 'Template',
  },
  element: {
    type: 'static_select',
    placeholder: {
      type: 'plain_text',
      text: 'Select template',
    },
    options: templateOptions,
    action_id: ids.input_template_action,
  },
});

export default templateBlock;
