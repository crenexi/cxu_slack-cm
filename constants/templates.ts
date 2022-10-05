export type Template = {
  enabled: boolean;
  key: string;
  title: string;
  emojiKey: string;
  footnote: string;
  moreLink?: URL;
};

const templates: Template[] = [
  {
    enabled: true,
    key: 'dro',
    title: 'DRO / Daily Report',
    emojiKey: 'calendar',
    footnote: 'Select the relevant site channel',
    moreLink: new URL(
      'https://docs.google.com/document/d/1xN4pQ0aLcgeU52Y0VjGZeAA8xKoNmLOk6-ECr2AFQe0/edit?usp=sharing',
    ),
  },
  {
    enabled: true,
    key: 'order',
    title: 'Order Summary',
    emojiKey: 'package',
    footnote: 'Select the relevant site channel',
    moreLink: new URL(
      'https://docs.google.com/document/d/1ZMLlip4x07TbQcISxLsrcNqm0mt2BfL1b5IXWh4WYWQ/edit?usp=sharing',
    ),
  },
  {
    enabled: true,
    key: 'expired',
    title: 'Expired Product',
    emojiKey: 'wastebasket',
    footnote: 'Select the relevant site channel',
    moreLink: new URL(
      'https://docs.google.com/document/d/17C9BLztmVtg5m3dLlmP2PoqB_RoLMJby9KjrdL4INbo/edit?usp=sharing',
    ),
  },
  {
    enabled: true,
    key: 'trainee',
    title: 'Trainee Recap',
    footnote: 'Select *#ba_flex_operators* as the channel',
    emojiKey: 'mortar_board',
  },
];

export default templates;
