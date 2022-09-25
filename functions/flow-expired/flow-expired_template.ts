interface Props {
  user?: string | undefined;
  name?: string | undefined;
  quantity?: number | undefined;
  bbDate?: string | undefined;
  accountManager?: string | undefined;
}

const expiredTemplate = (props: Props) => (`
:wastebasket: EXPIRED PRODUCT
By: <@${props.user}>
----------
Item/Product expired: ${props.name}
Quantity: ${props.quantity}
Date expired: ${props.bbDate}
----------
@ba-fieldops <@${props.accountManager}>
`);

export default expiredTemplate;
