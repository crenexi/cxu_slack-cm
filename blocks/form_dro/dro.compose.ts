import ids from '../../constants/block-ids.ts';
import { Compose } from '../../types/types.ts';
import { textValById } from '../../helpers/helpers.ts';
import { droTemplate } from './dro.template.ts';

export const droCompose: Compose = ({ values }) => {
  return droTemplate({
    opsGeneralMemo: textValById(values[ids.dro.opsGeneralMemo]),
    opsClientMemo: textValById(values[ids.dro.opsClientMemo]),
    opsDoneMemo: textValById(values[ids.dro.opsDoneMemo]),
    deliveryMissing: textValById(values[ids.dro.deliveryMissing]),
    deliveryDiscarded: textValById(values[ids.dro.deliveryDiscarded]),
    deliveryReturned: textValById(values[ids.dro.deliveryReturned]),
    prodAdjustments: textValById(values[ids.dro.prodAdjustments]),
    prodExpired: textValById(values[ids.dro.prodExpired]),
    prodPickup: textValById(values[ids.dro.prodPickup]),
  });
};
