interface Props {
  orderId: string | undefined;
  orderRecap: string | undefined;
  deliveryDate: string | undefined;
  listChained: string | undefined;
  listICNeeds: string | undefined;
  listEdits: string | undefined;
  auditCheck: 'Yes' | 'No';
  itemsPickup: string | undefined;
  itemsUnavailable: string | undefined;
  accountManager?: string | undefined;
}

const orderTemplate = (p: Props) => (`
Order ID: ${p.orderId}
Order Recap: ${p.orderRecap}
Delivery date: ${p.deliveryDate}
----------
Have you audited this order?: ${p.auditCheck}
Are there any "chained" products for the next order?: ${p.listChained}
Any adjustments needed to quantities for products listed?: ${p.listICNeeds}
Were any edits made to this order?: ${p.listEdits}
----------
Any items for pick-up + reason for pick-up: ${p.itemsPickup}
Below is a screenshot of the items that couldn't make it on the order: ${p.itemsUnavailable}
----------
@ba-fieldops <@${p.accountManager}>
`);

export default orderTemplate;
