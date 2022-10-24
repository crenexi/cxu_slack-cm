import constants from '../../constants/constants.ts';

type Props = {
  greeting: string;
  memo: string;
};

const memo = (str?: string) => {
  return !str ? '' : `\n----------\n${str}`;
};

export const qcStartingTemplate = (p: Props) => (`
${p.greeting} <!here> starting a Quality Control Check!
> Here is the outline of what we're looking for when we conduct our site QC checks:
> <${constants.links.qcExpectations}|BA-Site-QC-Expectations>
${memo(p.memo)}
`.trim());
