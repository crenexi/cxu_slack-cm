interface Props {
  orderId: string | undefined;
  orderRecap: string | undefined;
  deliveryDate: string | undefined;
  accountManager?: string | undefined;
}

const orderTemplate = (p: Props) => (`
ORDER
----------
Order ID: ${p.orderId}
Order Recap: ${p.orderRecap}
Delivery date: ${p.deliveryDate}
----------
Are there any "chained" products for the next order?: none
Any adjustments needed to quantities for products listed?: none
Were any edits made to this order?: none
Have you audited this order?: yes
----------
Any items for pick-up + reason for pick-up: none
Below is a screenshot of the items that couldn't make it on the order: null
----------
@ba-fieldops <@${p.accountManager}>
`);

export default orderTemplate;
