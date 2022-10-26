import ids from '../constants/block-ids.ts';
import { divider, plain } from '../helpers/helpers.ts';
import { templateBlock } from '../blocks/form_template/template.block.ts';

const regionDisclaimer = {
  type: 'section',
  text: {
    type: 'mrkdwn',
    text: ':foggy: Current use only for the *Bay Area* region',
  },
};

// deno-lint-ignore no-explicit-any
export const selectedTemplate = ({ state }: any) => {
  try {
    const block = state.values[ids.template];
    return block.action.selected_option.value;
  } catch (err) {
    console.error(err);
  }
};

export const step1View = () => ({
  type: 'modal',
  callback_id: 'step1', // used to route events to handlers
  notify_on_close: true, // triggers view_closed events
  title: plain('Compose Message'),
  close: plain('Cancel'),
  submit: plain('Next'),
  blocks: [templateBlock, divider, regionDisclaimer],
});
