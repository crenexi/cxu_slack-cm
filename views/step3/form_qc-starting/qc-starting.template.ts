import constants from '../../../constants/constants.ts';

type Props = {
  greeting: string;
  memo: string;
};

const memo = (str?: string) => {
  return !str ? '' : `\n----------\n${str}`;
};

const qcStartingTemplate = (p: Props) => (`
${p.greeting} <!here> starting a Quality Control Check!
> Here is the outline of what we're looking for when we conduct our site QC checks:
> ${constants.links.qcExpectations}
${memo(p.memo)}
`);

export default qcStartingTemplate;
