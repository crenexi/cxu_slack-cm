interface Props {
  e1_itemName: string | undefined;
  e1_quantity: string | undefined;
  e1_bbDate: string | undefined;
  e2_itemName: string | undefined;
  e2_quantity: string | undefined;
  e2_bbDate: string | undefined;
  e3_itemName: string | undefined;
  e3_quantity: string | undefined;
  e3_bbDate: string | undefined;
  accountManager?: string | undefined;
}

type ItemMessage = (props: {
  name: string | undefined;
  quantity: string | undefined;
  bbDate: string | undefined;
}) => string;

const itemMessage: ItemMessage = ({ name, quantity, bbDate }) => (`
Item/Product expired: ${name}
Quantity: ${quantity}
Date expired: ${bbDate}
`);

const expiredTemplate = (p: Props) => {
  // Entry One
  let message = itemMessage({
    name: p.e1_itemName,
    quantity: p.e1_quantity,
    bbDate: p.e1_bbDate,
  }).trim();

  // Entry Two
  if (p.e2_itemName) {
    message += '\n\n';
    message += itemMessage({
      name: p.e2_itemName,
      quantity: p.e2_quantity,
      bbDate: p.e2_bbDate,
    }).trim();
  }

  // Entry Three
  if (p.e3_itemName) {
    message += '\n\n';
    message += itemMessage({
      name: p.e3_itemName,
      quantity: p.e3_quantity,
      bbDate: p.e3_bbDate,
    }).trim();
  }

  // Final tags
  message += `\n----------\n@ba-fieldops <@${p.accountManager}>`;

  return message;
};

export default expiredTemplate;
