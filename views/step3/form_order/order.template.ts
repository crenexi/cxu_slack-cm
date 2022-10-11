interface Props {
  orderId: string | undefined;
  orderRecap: string | undefined;
  deliveryDate: string | undefined;
  listUnavailable: string | undefined;
  listChained: string | undefined;
  listICNeeds: string | undefined;
  listEdits: string | undefined;
  itemsPickup: string | undefined;
  auditCheck: 'Yes' | 'No';
}

const orderTemplate = (p: Props) => (`
_Order ID_: ${p.orderId}
_Order Recap_: ${p.orderRecap}
_Delivery date_: ${p.deliveryDate}
----------
_Have you audited this order?_: ${p.auditCheck}
_Are there any "chained" products for the next order?_: ${p.listChained}
_Any adjustments needed to quantities for products listed?_: ${p.listICNeeds}
_Were any edits made to this order?_: ${p.listEdits}
----------
_Any items for pick-up + reason for pick-up_: ${p.itemsPickup}
_Items that couldn't make it on the order_: ${p.listUnavailable}
----------
{TAGS}
`);

export default orderTemplate;
