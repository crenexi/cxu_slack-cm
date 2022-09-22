const expiredTemplate = (
  { user, name, quantity, bbDate, accountManager }: any,
) => (`
:wastebasket: EXPIRED PRODUCT
By: <@${user}>
----------
Item/Product expired: ${name}
Quantity: ${quantity}
Date expired: ${bbDate}
----------
@ba-fieldops <@${accountManager}>
`);

export default expiredTemplate;
