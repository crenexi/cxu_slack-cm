import { header, plain } from '../../../helpers/helpers.ts';

type Plain = {
  type: string;
  text: string;
};

type DroInput = (props: {
  id: string;
  label: string;
  placeholder: string;
  hint: string;
}) => {
  type: 'input';
  block_id: string;
  label: Plain;
  hint: Plain;
  element: {
    type: 'plain_text_input';
    action_id: 'action';
    placeholder: Plain;
  };
};

export const ids = {
  opsGeneralMemo: 'ops-general-memo',
  opsClientMemo: 'ops-client-memo',
  opsDoneMemo: 'ops-done-memo',
  deliveryMissing: 'delivery-missing',
  deliveryDiscarded: 'delivery-discarded',
  deliveryReturned: 'delivery-returned',
  prodAdjustments: 'prod-adjustments',
  prodExpired: 'prod-expired',
  prodPickup: 'prod-pickup',
};

const droInput: DroInput = ({ id, label, placeholder, hint }) => ({
  type: 'input',
  block_id: id,
  label: plain(label),
  hint: plain(hint),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    placeholder: plain(placeholder),
  },
});

const opsGeneralMemo = droInput({
  id: ids.opsGeneralMemo,
  label: 'Operator Note',
  placeholder: 'Anything',
  hint: 'What\'s the vibe?',
});

const droBlocks = [
  opsGeneralMemo,
];

export default droBlocks;
