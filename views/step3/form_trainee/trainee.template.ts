interface Props {
  accountManager?: string | undefined;
}

const traineeTemplate = (p: Props) => (`
TRAINEE
----------
@ba-fieldops <@${p.accountManager}>
`);

export default traineeTemplate;
