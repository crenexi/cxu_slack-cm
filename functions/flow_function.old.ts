// import { DefineFunction, Schema, SlackFunction } from 'deno-slack-sdk/mod.ts';
// import BuildmWorkflow from '../workflows/buildm_workflow.ts';

// import c from '../constants/constants.ts';
// import trigger from '../triggers/buildm_trigger.ts';
// import template from './flow-expired/flow-expired_template.ts';

//###
//### PROPS
//###

// const inputProps = {
//   interactivity: { type: Schema.slack.types.interactivity },
//   channel_id: { type: Schema.slack.types.channel_id },
// user: { type: Schema.slack.types.user_id },
// name: { type: Schema.types.string },
// quantity: { type: Schema.types.number },
// bbDate: { type: Schema.slack.types.date },
// accountManager: { type: Schema.slack.types.user_id },
// };

// const outputProps = {
//   updatedMsg: {
//     type: Schema.slack.types.rich_text,
//     description: 'Updated message to be posted',
//   },
// };

//###
//### FUNCTION
//###

// export const FlowFn = DefineFunction({
//   callback_id: c.functions.flow.id,
//   title: c.functions.flow.title,import { DefineFunction, Schema, SlackFunction } from 'deno-slack-sdk/mod.ts';
//   import BuildmWorkflow from '../workflows/buildm_workflow.ts';

//   import c from '../constants/constants.ts';
//   import trigger from '../triggers/buildm_trigger.ts';
//   import template from './flow-expired/flow-expired_template.ts';

//###
//### PROPS
//###

// const inputProps = {
//   interactivity: { type: Schema.slack.types.interactivity },
//   channel_id: { type: Schema.slack.types.channel_id },
// user: { type: Schema.slack.types.user_id },
// name: { type: Schema.types.string },
// quantity: { type: Schema.types.number },
// bbDate: { type: Schema.slack.types.date },
// accountManager: { type: Schema.slack.types.user_id },
// };

// const outputProps = {
//   updatedMsg: {
//     type: Schema.slack.types.rich_text,
//     description: 'Updated message to be posted',
//   },
// };

//###
//### FUNCTION
//###

/*   export const FlowFn = DefineFunction({
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
 */
/** https://api.slack.com/future/functions/custom */
// export const FlowFn = DefineFunction({
//   callback_id: c.functions.flow.id,
//   source_file: c.functions.flow.srcFile,
//   title: c.functions.flow.title,
//   description: c.functions.flow.description,
//   input_parameters: {
//     properties: { ...inputProps },
//     required: ['user', 'quantity', 'bbDate', 'accountManager'],
//   },
//   output_parameters: {
//     properties: { ...outputProps },
//     required: ['updatedMsg'],
//   },
// });

/*   const Flow = SlackFunction(FlowFn, ({ inputs }) => {
    const updatedMsg = template({ ...inputs });

    return {
      outputs: {
        updatedMsg,
      },
    };
  });

  export default Flow;

  },
  output_parameters: {
    properties: {},
    required: [],
  },
}); */

/** https://api.slack.com/future/functions/custom */
// export const FlowFn = DefineFunction({
//   callback_id: c.functions.flow.id,
//   source_file: c.functions.flow.srcFile,
//   title: c.functions.flow.title,
//   description: c.functions.flow.description,
//   input_parameters: {
//     properties: { ...inputProps },
//     required: ['user', 'quantity', 'bbDate', 'accountManager'],
//   },
//   output_parameters: {
//     properties: { ...outputProps },
//     required: ['updatedMsg'],
//   },
// });

/* const Flow = SlackFunction(FlowFn, ({ inputs }) => {
  const updatedMsg = template({ ...inputs });

  return {
    outputs: {
      updatedMsg,
    },
  };
});

export default Flow;
 */
