type Props = {
  orderId: string | undefined;
  orderRecap: string | undefined;
  deliveryDate: string | undefined;
  listUnavailable: string | undefined;
  listChained: string | undefined;
  listICNeeds: string | undefined;
  listEdits: string | undefined;
  itemsPickup: string | undefined;
  auditCheck: 'Yes' | 'No';
};

export const orderTemplate = (p: Props) => (`
Order ID: ${p.orderId}
Order recap: ${p.orderRecap}
Delivery date: ${p.deliveryDate}
----------
Have you audited this order?: ${p.auditCheck}
Are there any "chained" products for the next order?: ${p.listChained}
Any adjustments needed to quantities for products listed?: ${p.listICNeeds}
Were any edits made to this order?: ${p.listEdits}
----------
Any items for pick-up + reason for pick-up: ${p.itemsPickup}
Items that couldn't make it on the order: ${p.listUnavailable}
----------
Account Manager: {TAG}
Field Coordinator: {TAG}
`);
