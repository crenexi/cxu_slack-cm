import ids from '../../constants/block-ids.ts';
import { SelectOptionBlock } from '../../types/types.ts';
import templates from '../../constants/templates.ts';

const templateOptions = templates
  .filter(({ isEnabled }) => isEnabled)
  .reduce<SelectOptionBlock[]>((options, template) => {
    const { key, emojiKey, titleGroup, isSlackDeprecated } = template;

    const title = !isSlackDeprecated
      ? template.title
      : `${template.title} Assistant`;

    return [...options, {
      text: {
        type: 'plain_text',
        emoji: true,
        text: `:${emojiKey}:  ${titleGroup} — ${title}`,
      },
      value: key,
    }];
  }, []);

export const templateBlock = ({
  type: 'input',
  block_id: ids.template,
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
    action_id: 'action',
  },
});
