import { Template } from '../../../constants/templates.ts';

type Props = {
  template: Template;
};

const modalHeaderBlocks = ({ template }: Props) => {
  const isSlackDeprecated = { template };

  return [
    {
      type: 'section',
      text: {
        type: 'plain_text',
        text: `Header Block | ${isSlackDeprecated}`,
      },
    },
  ];
};

export default modalHeaderBlocks;
