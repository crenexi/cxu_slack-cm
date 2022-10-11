import { tagsToText } from '../../../helpers/helpers.ts';

interface Props {
  equipDesc: string;
  equipZone: string;
  equipIssue: string;
  accountManager: string;
  technicians: string[];
}

const equipmentTemplate = (p: Props) => (`
_Equipment_: ${p.equipDesc}
_Area/zone_: ${p.equipZone}
_Issue_: ${p.equipIssue}
----------
@ba-fieldops <@${p.accountManager}> ${tagsToText(p.technicians)}
`);

export default equipmentTemplate;
