import { Template } from '../types/types.ts';

const templates: Template[] = [
  {
    key: 'taskSingle',
    emojiKey: 'heavy_check_mark',
    titleGroup: 'Ops',
    title: 'Request Task Update',
    channelTip: 'Select related *site channel*',
    isEnabled: true,
  },
  {
    key: 'taskRefPic',
    emojiKey: 'link',
    titleGroup: 'Ops',
    title: 'Add Task Reference Photo',
    channelTip: 'Selected related *site channel*',
    isEnabled: true,
  },
  {
    key: 'signage',
    emojiKey: 'placard',
    titleGroup: 'Ops',
    title: 'Request Signage/Labels',
    channelTip: 'Select *#ba_signage_labels* as the channel',
    isEnabled: true,
  },
  {
    key: 'equipment',
    emojiKey: 'wrench',
    titleGroup: 'Ops',
    title: 'Flag Equipment Issue',
    channelTip: 'Select related *site channel*',
    isEnabled: true,
  },
  {
    key: 'taskBulk',
    emojiKey: 'clipboard',
    titleGroup: 'Flex',
    title: 'Request Task Bulk Update',
    channelTip: 'Select related *site channel*',
    isEnabled: true,
  },
  {
    key: 'qcStarting',
    emojiKey: 'straight_ruler',
    titleGroup: 'Flex',
    title: 'Send QC Starting',
    channelTip: 'Select * site channel* of QC Check',
    isEnabled: true,
  },
  {
    key: 'qcRemarks',
    emojiKey: 'black_nib',
    titleGroup: 'Flex',
    title: 'Send QC Remarks',
    channelTip: 'Select * site channel* of QC Check',
    isEnabled: true,
  },
  {
    key: 'trainee',
    emojiKey: 'mortar_board',
    titleGroup: 'Flex',
    title: 'Send Trainee Recap',
    channelTip: 'Select *#ba_flex_operators* as the channel',
    isEnabled: true,
  },
];

export default templates;
