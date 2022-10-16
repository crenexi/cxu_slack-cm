import ids from '../../constants/block-ids.ts';
import { Compose } from '../../types/types.ts';
import { textValById } from '../../helpers/helpers.ts';
import { qcStartingTemplate } from './qc-starting.template.ts';

export const qcStartingCompose: Compose = ({ values }) => {
  const memo = values[ids.qcStarting.memo];

  return qcStartingTemplate({
    greeting: textValById(values[ids.qcStarting.greeting]),
    memo: textValById(memo, { default: '' }),
  });
};
