/** https://api.slack.com/future/functions#open-a-form */
// const inputForm = BuildmWorkflow.addStep(
//   Schema.slack.functions.OpenForm,
//   {
//     title: c.workflow.title,
//     interactivity: BuildmWorkflow.inputs.interactivity,
//     submit_label: c.modal.view2.submitLabel,
//     fields: {
//       elements: [
//         {
//           name: 'channel',
//           title: 'Site channel',
//           type: Schema.slack.types.channel_id,
//           default: BuildmWorkflow.inputs.channel,
//         },
//         {
//           name: 'name',
//           title: 'Item/product expired',
//           type: Schema.types.string,
//         },
//         {
//           name: 'quantity',
//           title: 'Item quantity',
//           type: Schema.types.number,
//         },
//         {
//           name: 'bbDate',
//           title: 'Date',
//           type: Schema.slack.types.date,
//         },
//         {
//           name: 'accountManager',
//           title: 'Account Manager',
//           type: Schema.slack.types.user_id,
//         },
//       ],
//       required: ['channel', 'name', 'quantity', 'bbDate', 'accountManager'],
//     },
//   },
// );

// const buildmFnStep = BuildmWorkflow.addStep(FlowFn, {
//   user: BuildmWorkflow.inputs.user,
//   name: inputForm.outputs.fields.name,
//   quantity: inputForm.outputs.fields.quantity,
//   bbDate: inputForm.outputs.fields.bbDate,
//   accountManager: inputForm.outputs.fields.accountManager,
// });

// BuildmWorkflow.addStep(Schema.slack.functions.SendMessage, {
//   channel_id: inputForm.outputs.fields.channel,
//   message: buildmFnStep.outputs.updatedMsg,
//   message: 'Dummy',
// });
