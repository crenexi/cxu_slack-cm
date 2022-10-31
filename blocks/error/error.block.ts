export const errorBlocks = (text?: string) => [
  {
    type: 'header',
    text: {
      type: 'plain_text',
      text: 'Oops',
    },
  },
  {
    type: 'section',
    text: {
      type: 'plain_text',
      text: text ?? 'Error: something went wrong',
    },
  },
];
