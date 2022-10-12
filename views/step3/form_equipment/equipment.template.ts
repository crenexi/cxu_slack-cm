import { tagsToText } from '../../../helpers/helpers.ts';

interface Props {
  equipDesc: string;
  equipZone: string;
  equipIssue: string;
  accountManager: string;
  technicians: string[];
}

const equipmentTemplate = (p: Props) => (`
Equipment: ${p.equipDesc}
Area/zone: ${p.equipZone}
Issue: ${p.equipIssue}
----------
:link: _Relevant pics below if provided_
----------
@ba-fieldops <@${p.accountManager}> ${tagsToText(p.technicians)}
`);

export default equipmentTemplate;
