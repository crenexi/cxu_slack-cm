import { DefineFunction, Schema } from 'deno-slack-sdk/mod.ts';

import c from '../constants/constants.ts';

const inputProps = {
  interactivity: { type: Schema.slack.types.interactivity },
  channel_id: { type: Schema.slack.types.channel_id },
};

export const FlowFn = DefineFunction({
  callback_id: c.functions.flow.id,
  title: c.functions.flow.title,
  description: c.functions.flow.description,
  source_file: c.functions.flow.srcFile,
  input_parameters: {
    properties: { ...inputProps },
    required: ['interactivity'],
  },
  output_parameters: {
    properties: {},
    required: [],
  },
});
