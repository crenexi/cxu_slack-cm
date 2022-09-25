import { DefineFunction, Schema, SlackFunction } from 'deno-slack-sdk/mod.ts';
import { SlackAPI } from 'deno-slack-api/mod.ts';
import BuildmWorkflow from '../workflows/buildm_workflow.ts';

import c from '../constants/constants.ts';
import trigger from '../triggers/buildm_trigger.ts';
import template from './flow-expired/flow-expired_template.ts';

//###
//### PROPS
//###

const inputProps = {
  user: { type: Schema.slack.types.user_id },
  name: { type: Schema.types.string },
  quantity: { type: Schema.types.number },
  bbDate: { type: Schema.slack.types.date },
  accountManager: { type: Schema.slack.types.user_id },
};

const outputProps = {
  updatedMsg: {
    type: Schema.slack.types.rich_text,
    description: 'Updated message to be posted',
  },
};

//###
//### FUNCTION
//###

/** https://api.slack.com/future/functions/custom */
export const FlowExpiredFn = DefineFunction({
  callback_id: c.functions.flow.id,
  source_file: c.functions.flow.srcFile,
  title: c.functions.flow.title,
  description: c.functions.flow.desc,
  input_parameters: {
    properties: { ...inputProps },
    required: ['user', 'quantity', 'bbDate', 'accountManager'],
  },
  output_parameters: {
    properties: { ...outputProps },
    required: ['updatedMsg'],
  },
});

const FlowExpired = SlackFunction(
  FlowExpiredFn,
  async ({ inputs, token }) => {
    const updatedMsg = template({ ...inputs });

    const client = SlackAPI(token);

    const triggerRes = await client.workflows.triggers.create<
      typeof BuildmWorkflow.definition
    >(trigger);

    console.log(`Trigger response: ${triggerRes}`);

    return {
      outputs: {
        updatedMsg,
      },
    };
  },
);

export default FlowExpired;
