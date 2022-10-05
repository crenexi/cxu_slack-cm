export type Template = {
  enabled: boolean;
  key: string;
  title: string;
  emojiKey: string;
  moreLink?: URL;
};

export type Constants = {
  general: {
    title: string;
    description: string;
    actionLabel: string;
  };
  templates: Template[];
};

export const templates: Template[] = [
  {
    enabled: true,
    key: 'dro',
    title: 'DRO / Daily Report',
    emojiKey: 'calendar',
    moreLink: new URL(
      'https://docs.google.com/document/d/1xN4pQ0aLcgeU52Y0VjGZeAA8xKoNmLOk6-ECr2AFQe0/edit?usp=sharing',
    ),
  },
  {
    enabled: true,
    key: 'order',
    title: 'Order Summary',
    emojiKey: 'package',
    moreLink: new URL(
      'https://docs.google.com/document/d/1ZMLlip4x07TbQcISxLsrcNqm0mt2BfL1b5IXWh4WYWQ/edit?usp=sharing',
    ),
  },
  {
    enabled: true,
    key: 'expired',
    title: 'Expired Product',
    emojiKey: 'wastebasket',
    moreLink: new URL(
      'https://docs.google.com/document/d/17C9BLztmVtg5m3dLlmP2PoqB_RoLMJby9KjrdL4INbo/edit?usp=sharing',
    ),
  },
  {
    enabled: true,
    key: 'trainee',
    title: 'Trainee Recap',
    emojiKey: 'mortar_board',
  },
];

const constants: Constants = {
  templates,
  general: {
    title: 'Ops Composer',
    description: 'Builder to send common operator messages',
    actionLabel: 'Compose Message',
  },
};

export default constants;
