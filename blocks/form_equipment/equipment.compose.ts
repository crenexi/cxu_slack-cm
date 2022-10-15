import ids from '../../constants/block-ids.ts';
import { Compose } from '../../types/types.ts';
import {
  textValById,
  usersValById,
  userValById,
} from '../../helpers/helpers.ts';
import { equipmentTemplate } from './equipment.template.ts';

export const equipmentCompose: Compose = ({ values }) => {
  return equipmentTemplate({
    equipDesc: textValById(values[ids.equipment.equipDesc]),
    equipZone: textValById(values[ids.equipment.equipZone]),
    equipIssue: textValById(values[ids.equipment.equipIssue]),
    accountManager: userValById(values[ids.equipment.accountManager]),
    technicians: usersValById(values[ids.equipment.tehnicians]),
  });
};
