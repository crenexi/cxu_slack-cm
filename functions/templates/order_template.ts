interface Props {
  accountManager?: string | undefined;
}

const orderTemplate = (p: Props) => (`
ORDER
----------
@ba-fieldops <@${p.accountManager}>
`);

export default orderTemplate;
