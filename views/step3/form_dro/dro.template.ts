interface Props {
  opsGeneralMemo: string;
  opsClientMemo: string;
  opsDoneMemo: string;
  deliveryMissing: string;
  deliveryDiscarded: string;
  deliveryReturned: string;
  prodAdjustments: string;
  prodExpired: string;
  prodPickup: string;
}

const droTemplate = (p: Props) => (`
Operator note: ${p.opsGeneralMemo}
---------
Delivery missing: ${p.deliveryMissing}
Delivery expired/damaged: ${p.deliveryDiscarded}
Delivery returned: ${p.deliveryReturned}
---------
Inventory adjustments: ${p.prodAdjustments}
Product expired on-site: ${p.prodExpired}
Product in Pick-Up Hot Spot: ${p.prodPickup}
---------
Client trends/adjustments/issues: ${p.opsClientMemo}
Was not able to get to: ${p.opsDoneMemo}
---------
Account Manager: {TAG}
Field Coordinator: {TAG}
`);

export default droTemplate;
