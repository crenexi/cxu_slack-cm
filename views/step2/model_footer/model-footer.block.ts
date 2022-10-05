import { Template } from '../../../constants/templates.ts';

type Props = {
  template: Template | undefined;
};

const modalFooterBlocks = ({ template }: Props) => [
  {
    type: 'context',
    elements: [
      {
        type: 'mrkdwn',
        text: template?.footnote,
      },
    ],
  },
];

export default modalFooterBlocks;
