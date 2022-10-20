type Props = {
  opsGeneralMemo: string;
  opsClientMemo: string;
  opsDoneMemo: string;
  deliveryMissing: string;
  deliveryDiscarded: string;
  deliveryReturned: string;
  prodAdjustments: string;
  prodExpired: string;
  prodPickup: string;
};

export const droTemplate = (p: Props) => (`
Operator Note: ${p.opsGeneralMemo}
Missing Delivery Products: ${p.deliveryMissing}
Delivery expired/damaged: ${p.deliveryDiscarded}
Delivery returned: ${p.deliveryReturned}
---------
---------
Inventory Adjustments: ${p.prodAdjustments}
Items Expired On-Site: ${p.prodExpired}
Product in Pick-Up Hot Spot: ${p.prodPickup}
Client Trends/Adjustments/Issues: ${p.opsClientMemo}
Was not able to get to: ${p.opsDoneMemo}
---------
Tags: N/A
Account Manager: {TAG}
Field Coordinator: {TAG}
`);

/*
 Shift Report
----------
Operator Note:
Missing Delivery Products?:
----------
Inventory Adjustments:
Items Expired On-Site:
Product in Pick-Up Hot Spot:
Client Trends/Adjustments/Issues:
*/
