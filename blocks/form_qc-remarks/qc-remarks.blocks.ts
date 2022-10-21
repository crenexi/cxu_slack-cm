import ids from '../../constants/block-ids.ts';
import { RemarksBlock, RemarksChecklistBlock } from '../../types/types.ts';
import { header, plain } from '../../helpers/helpers.ts';
import { qcRemarksText } from './qc-remarks.template.ts';

//## REMARKS

const remarksBlock: RemarksBlock = ({ id, label }) => ({
  type: 'input',
  block_id: id,
  label: plain(label),
  optional: true,
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    multiline: true,
    placeholder: plain('No Comments'),
  },
});

const infoRemarks = remarksBlock({
  id: ids.qcRemarks.infoRemarks,
  label: 'Info Remarks',
});

const placeRemarks = remarksBlock({
  id: ids.qcRemarks.placeRemarks,
  label: 'Place Remarks',
});

const systemRemarks = remarksBlock({
  id: ids.qcRemarks.systemRemarks,
  label: 'System Remarks',
});

//## CHECKS

const checklistBlock: RemarksChecklistBlock = ({ id, label, options }) => ({
  type: 'input',
  block_id: id,
  label: plain(label),
  optional: true,
  element: {
    options,
    type: 'checkboxes',
    action_id: 'action',
  },
});

const infoChecks = checklistBlock({
  id: ids.qcRemarks.infoChecklist,
  label: 'Info Checks',
  options: [
    {
      value: ids.qcRemarks.infoOpts.infoSync,
      text: plain(qcRemarksText.infoSync),
    },
    {
      value: ids.qcRemarks.infoOpts.clientSync,
      text: plain(qcRemarksText.clientSync),
    },
    {
      value: ids.qcRemarks.infoOpts.access,
      text: plain(qcRemarksText.access),
    },
  ],
});

const placeChecks = checklistBlock({
  id: ids.qcRemarks.placeChecklist,
  label: 'Place Checks',
  options: [
    {
      value: ids.qcRemarks.placeOpts.signage,
      text: plain(qcRemarksText.signage),
    },
    {
      value: ids.qcRemarks.placeOpts.equipment,
      text: plain(qcRemarksText.equipment),
    },
    {
      value: ids.qcRemarks.placeOpts.shelving,
      text: plain(qcRemarksText.shelving),
    },
    {
      value: ids.qcRemarks.placeOpts.icUtils,
      text: plain(qcRemarksText.icUtils),
    },
  ],
});

const systemChecks = checklistBlock({
  id: ids.qcRemarks.systemChecklist,
  label: 'System Checks',
  options: [
    {
      value: ids.qcRemarks.systemOpts.taskList,
      text: plain(qcRemarksText.taskList),
    },
    {
      value: ids.qcRemarks.systemOpts.icLevels,
      text: plain(qcRemarksText.icLevels),
    },
    {
      value: ids.qcRemarks.systemOpts.timing,
      text: plain(qcRemarksText.timing),
    },
  ],
});

//## OTHER

const accountManager = {
  type: 'input',
  block_id: ids.qcRemarks.accountManager,
  label: plain('Account Manager'),
  element: {
    type: 'multi_users_select',
    action_id: 'action',
    max_selected_items: 1,
    placeholder: plain('Select'),
  },
};

const otherTags = {
  type: 'input',
  block_id: ids.qcRemarks.otherTags,
  optional: true,
  label: plain('Other Tags'),
  hint: plain('@ba-fieldops included by default'),
  element: {
    type: 'multi_users_select',
    action_id: 'action',
    placeholder: plain('Select'),
  },
};

export const qcRemarksBlocks = [
  header('Info :pencil:'),
  infoChecks,
  infoRemarks,
  header('Place :office:'),
  placeChecks,
  placeRemarks,
  header('System :scales:'),
  systemChecks,
  systemRemarks,
  header('Tags :busts_in_silhouette:'),
  accountManager,
  otherTags,
];
