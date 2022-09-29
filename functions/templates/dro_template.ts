interface Props {
  accountManager?: string | undefined;
}

const traineeTemplate = (p: Props) => (`
DRO
----------
@ba-fieldops <@${p.accountManager}>
`);

export default traineeTemplate;
