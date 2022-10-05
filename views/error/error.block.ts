const errorBlock = (text?: string) => ({
  type: 'section',
  text: {
    type: 'plain_text',
    text: text ?? 'Error: something went wrong',
  },
});

export default errorBlock;
