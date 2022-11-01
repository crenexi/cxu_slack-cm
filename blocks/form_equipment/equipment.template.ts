import constants from '../../constants/constants.ts';
import { tagsToText } from '../../helpers/helpers.ts';

type Props = {
  equipDesc: string;
  equipZone: string;
  equipIssue: string;
  accountManager: string;
  technicians: string[];
};

export const equipmentTemplate = (p: Props) => (`
Equipment: ${p.equipDesc}
Area/zone: ${p.equipZone}
Issue: ${p.equipIssue}
----------
:link: _Relevant pics below if provided_
----------
<!subteam^${constants.fieldOpsDefault}> <@${p.accountManager}> ${
  tagsToText(p.technicians)
}
`);
