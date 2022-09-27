interface Props {
  user?: string | undefined;
  name?: string | undefined;
  quantity?: number | undefined;
  bbDate?: string | undefined;
  accountManager?: string | undefined;
}

const expiredTemplate = (p: Props) => (`
:wastebasket: EXPIRED PRODUCT
By: <@${p.user}>
----------
Item/Product expired: ${p.name}
Quantity: ${p.quantity}
Date expired: ${p.bbDate}
----------
@ba-fieldops <@${p.accountManager}>
`);

export default expiredTemplate;
