import { templates } from '../../constants/constants.ts';

export const view1Ids = {
  input_template_block: 'input_template',
  input_template_action: 'input_template_action',
};

const templateOptions = templates
  .filter(({ enabled }) => enabled)
  .map(({ key, title, emoji }) => {
    return {
      text: {
        type: 'plain_text',
        text: `${emoji} | ${title}`,
        emoji: true,
      },
      value: key,
    };
  });

const selectTemplateBlocks = [
  {
    type: 'input',
    block_id: view1Ids.input_template_block,
    label: {
      type: 'plain_text',
      text: 'Message Template',
    },
    element: {
      type: 'static_select',
      placeholder: {
        type: 'plain_text',
        text: 'Select template',
      },
      options: templateOptions,
      action_id: view1Ids.input_template_action,
    },
  },
];

const view1 = {
  type: 'modal',
  callback_id: 'view1', // used to route events to handlers
  notify_on_close: true, // triggers view_closed events
  title: {
    type: 'plain_text',
    text: 'Compose Message',
  },
  blocks: [...selectTemplateBlocks],
  submit: {
    type: 'plain_text',
    text: 'Next',
  },
};

export default view1;
