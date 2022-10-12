export type Template = {
  key: string;
  isEnabled: boolean;
  isSlackDeprecated: boolean;
  title: string;
  emojiKey: string;
  channelTip: string;
};

const templates: Template[] = [
  {
    key: 'signage',
    isEnabled: true,
    isSlackDeprecated: false,
    title: 'Signage Request',
    emojiKey: 'label',
    channelTip: 'Select *#ba_signage_labels* as the channel',
  },
  {
    key: 'equipment',
    isEnabled: true,
    isSlackDeprecated: false,
    title: 'Equipment Issue',
    emojiKey: 'wrench',
    channelTip: 'Select *site channel* of concern.',
  },
  {
    key: 'trainee',
    isEnabled: true,
    isSlackDeprecated: false,
    title: 'Trainee Recap',
    emojiKey: 'mortar_board',
    channelTip: 'Select *#ba_flex_operators* as the channel',
  },
  {
    key: 'order',
    isEnabled: true,
    isSlackDeprecated: true,
    title: 'Order Report',
    emojiKey: 'package',
    channelTip: 'Select *DM to yourself* for copy-paste use.',
  },
  {
    key: 'dro',
    isEnabled: true,
    isSlackDeprecated: true,
    title: 'DRO Report',
    emojiKey: 'calendar',
    channelTip: 'Select *DM to yourself* for copy-paste use.',
  },
];

export default templates;
