export type Template = {
  key: string;
  emojiKey: string;
  titleGroup: string;
  title: string;
  channelTip: string;
  isSlackDeprecated: boolean;
  isEnabled: boolean;
};

const templates: Template[] = [
  {
    key: 'signage',
    emojiKey: 'label',
    titleGroup: 'Ops',
    title: 'Signage Request',
    channelTip: 'Select *#ba_signage_labels* as the channel',
    isSlackDeprecated: false,
    isEnabled: true,
  },
  {
    key: 'equipment',
    emojiKey: 'wrench',
    titleGroup: 'Ops',
    title: 'Equipment Issue',
    channelTip: 'Select *site channel* of concern',
    isSlackDeprecated: false,
    isEnabled: true,
  },
  {
    key: 'qcStarting',
    emojiKey: 'straight_ruler',
    titleGroup: 'Flex',
    title: 'QC Starting',
    channelTip: 'Select * site channel* of QC Check',
    isSlackDeprecated: false,
    isEnabled: true,
  },
  {
    key: 'qcFootnotes',
    emojiKey: 'black_nib',
    titleGroup: 'Flex',
    title: 'QC Footnotes',
    channelTip: 'Select * site channel* of QC Check',
    isSlackDeprecated: false,
    isEnabled: true,
  },
  {
    key: 'trainee',
    emojiKey: 'mortar_board',
    titleGroup: 'Flex',
    title: 'Trainee Recap',
    channelTip: 'Select *#ba_flex_operators* as the channel',
    isSlackDeprecated: false,
    isEnabled: true,
  },
  {
    key: 'order',
    emojiKey: 'package',
    titleGroup: 'CAF',
    title: 'Order Report',
    channelTip: 'Select *DM to yourself* for copy-paste use',
    isSlackDeprecated: true,
    isEnabled: true,
  },
  {
    key: 'dro',
    emojiKey: 'calendar',
    titleGroup: 'CAF',
    title: 'DRO Report',
    channelTip: 'Select *DM to yourself* for copy-paste use',
    isSlackDeprecated: true,
    isEnabled: true,
  },
];

export default templates;
