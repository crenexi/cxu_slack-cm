import type { SlackFunctionHandler } from 'deno-slack-sdk/types.ts';
import { SlackAPI } from 'deno-slack-api/mod.ts';
import { FlowFn } from './flow_function-def.ts';
import flowChooseBlocks from './flow-choose/flow-choose_blocks.ts';
import c from '../constants/constants.ts';

export const Flow: SlackFunctionHandler<
  typeof FlowFn.definition
> = async ({ inputs, token }) => {
  console.log('Starting Flow handler...');

  const client = SlackAPI(token);

  await client.views.open({
    interactivity_pointer: inputs.interactivity.interactivity_pointer,
    view: {
      type: 'modal',
      title: {
        type: 'plain_text',
        text: c.modal.view1.title,
      },
      blocks: flowChooseBlocks,
      submit: {
        type: 'plain_text',
        text: c.modal.view1.submitLabel,
      },
      callback_id: c.modal.id, // used to route events to handlers
      notify_on_close: true, // triggers view_closed events
    },
  });

  return {
    // Set to false; we'll set complete status in view submission handler
    completed: false,
  };
};
