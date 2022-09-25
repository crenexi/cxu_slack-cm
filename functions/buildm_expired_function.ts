import { DefineFunction, Schema, SlackFunction } from 'deno-slack-sdk/mod.ts';
import { SlackAPI } from 'deno-slack-api/mod.ts';
import BuildmWorkflow from '../workflows/buildm_workflow.ts';
import buildmTrigger from '../triggers/buildm_trigger.ts';
import expiredTemplate from '../templates/expired_template.ts';
import c from '../constants/constants.ts';

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

/** https://api.slack.com/future/functions/custom */
export const BuildmExpiredFn = DefineFunction({
  callback_id: c.buildm.functions.expired.id,
  source_file: c.buildm.functions.expired.srcFile,
  title: c.buildm.functions.expired.title,
  description: c.buildm.functions.expired.desc,
  input_parameters: {
    properties: { ...inputProps },
    required: ['user', 'quantity', 'bbDate', 'accountManager'],
  },
  output_parameters: {
    properties: { ...outputProps },
    required: ['updatedMsg'],
  },
});

export default SlackFunction(
  BuildmExpiredFn,
  async ({ inputs, token }) => {
    const updatedMsg = expiredTemplate({ ...inputs });

    const client = SlackAPI(token);

    const triggerRes = await client.workflows.triggers.create<
      typeof BuildmWorkflow.definition
    >(buildmTrigger);

    console.log(`Trigger response: ${triggerRes}`);

    return {
      outputs: {
        updatedMsg,
      },
    };
  },
);
