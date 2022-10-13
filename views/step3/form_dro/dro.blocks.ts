import { divider, header, plain } from '../../../helpers/helpers.ts';

type Plain = {
  type: string;
  text: string;
};

type DroInput = (props: {
  id: string;
  label: string;
  placeholder: string;
  hint: string;
  optional?: boolean;
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

const droInput: DroInput = (props) => {
  const { id, label, placeholder, hint, optional } = props;

  return {
    type: 'input',
    block_id: id,
    optional: !!optional,
    label: plain(label),
    hint: plain(hint),
    element: {
      type: 'plain_text_input',
      action_id: 'action',
      placeholder: plain(placeholder),
    },
  };
};

const opsGeneralMemo = droInput({
  id: ids.opsGeneralMemo,
  label: 'Operator Note',
  placeholder: 'Anything',
  hint: 'What\'s the vibe?',
});

const opsClientMemo = droInput({
  id: ids.opsClientMemo,
  label: 'Client/Site Note',
  placeholder: 'None',
  hint: 'Client trends/adjustments/issues',
  optional: true,
});

const opsDoneMemo = droInput({
  id: ids.opsDoneMemo,
  label: 'Unable to Complete',
  placeholder: 'None',
  hint: 'Tasks you were unable to complete',
  optional: true,
});

const deliveryMissing = droInput({
  optional: true,
  id: ids.deliveryMissing,
  label: 'Delivery Missing',
  placeholder: 'None',
  hint: 'Anything missing from delivery?',
});

const deliveryDiscarded = droInput({
  optional: true,
  id: ids.deliveryDiscarded,
  label: 'Delivery Expired/Damaged',
  placeholder: 'None',
  hint: 'Issues with delivered product?',
});

const deliveryReturned = droInput({
  optional: true,
  id: ids.deliveryReturned,
  label: 'Delivery Returned',
  placeholder: 'None',
  hint: 'Any delivery returns or pickups?',
});

const prodAdjustments = droInput({
  optional: true,
  id: ids.prodAdjustments,
  label: 'Inventory Aduustments',
  placeholder: 'All good!',
  hint: 'Edits needed for auto-order settings',
});

const prodExpired = droInput({
  optional: true,
  id: ids.prodExpired,
  label: 'Product Expired',
  placeholder: 'None',
  hint: 'Any product expired/damaged on-site?',
});

const prodPickup = droInput({
  optional: true,
  id: ids.prodPickup,
  label: 'Product in Pickup Spot',
  placeholder: 'None',
  hint: 'Anything to be returned and in pickup spot?',
});

const droBlocks = [
  header(':office: Summary'),
  opsGeneralMemo,
  opsClientMemo,
  opsDoneMemo,
  header(':truck: Delivery'),
  deliveryMissing,
  deliveryDiscarded,
  deliveryReturned,
  header(':green_apple: Product'),
  prodAdjustments,
  prodExpired,
  prodPickup,
];

export default droBlocks;
