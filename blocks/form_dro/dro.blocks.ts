import ids from '../../constants/block-ids.ts';
import { DroInput } from '../../types/types.ts';
import { header, plain } from '../../helpers/helpers.ts';

const droInput: DroInput = (props) => {
  const { id, label, placeholder, hint, optional, multiline } = props;

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
      multiline: !!multiline,
    },
  };
};

const opsGeneralMemo = droInput({
  id: ids.dro.opsGeneralMemo,
  label: 'Operator Note',
  placeholder: 'Anything',
  hint: 'What\'s the vibe?',
});

const opsClientMemo = droInput({
  id: ids.dro.opsClientMemo,
  label: 'Client/Site Note',
  placeholder: 'None',
  hint: 'Client trends/adjustments/issues',
  optional: true,
  multiline: true,
});

const opsDoneMemo = droInput({
  id: ids.dro.opsDoneMemo,
  label: 'Unable to Complete',
  placeholder: 'None',
  hint: 'Tasks you were unable to complete',
  optional: true,
  multiline: true,
});

const deliveryMissing = droInput({
  optional: true,
  id: ids.dro.deliveryMissing,
  label: 'Delivery Missing',
  placeholder: 'None',
  hint: 'Anything missing from delivery?',
});

const deliveryDiscarded = droInput({
  optional: true,
  id: ids.dro.deliveryDiscarded,
  label: 'Delivery Expired/Damaged',
  placeholder: 'None',
  hint: 'Issues with delivered product?',
  multiline: true,
});

const deliveryReturned = droInput({
  optional: true,
  id: ids.dro.deliveryReturned,
  label: 'Delivery Returned',
  placeholder: 'None',
  hint: 'Any delivery returns or pickups?',
  multiline: true,
});

const prodAdjustments = droInput({
  optional: true,
  id: ids.dro.prodAdjustments,
  label: 'Inventory Adustments',
  placeholder: 'All good!',
  hint: 'Edits needed for auto-order settings',
  multiline: true,
});

const prodExpired = droInput({
  optional: true,
  id: ids.dro.prodExpired,
  label: 'Product Expired',
  placeholder: 'None',
  hint: 'Any product expired/damaged on-site?',
  multiline: true,
});

const prodPickup = droInput({
  optional: true,
  id: ids.dro.prodPickup,
  label: 'Product in Pickup Spot',
  placeholder: 'None',
  hint: 'Anything to be returned and in pickup spot?',
});

export const droBlocks = [
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