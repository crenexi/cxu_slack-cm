interface Props {
  accountManager?: string | undefined;
}

const droTemplate = (p: Props) => (`
DRO
----------
@ba-fieldops <@${p.accountManager}>
`);

export default droTemplate;
