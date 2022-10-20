type Props = {
  opsGeneralMemo: string;
  opsClientMemo: string;
  deliveryMissing: string;
  prodAdjustments: string;
  prodExpired: string;
  prodPickup: string;
};

export const droTemplate = (p: Props) => (`
Operator Note: ${p.opsGeneralMemo}
Missing Delivery Products: ${p.deliveryMissing}
---------
Inventory Adjustments: ${p.prodAdjustments}
Items Expired On-Site: ${p.prodExpired}
Product in Pick-Up Hot Spot: ${p.prodPickup}
Client Trends/Adjustments/Issues: ${p.opsClientMemo}
---------
Tags: N/A
Account Manager: {TAG}
Field Coordinator: {TAG}
`);
