import constants from '../../constants/constants.ts';
import { tagsToText } from '../../helpers/helpers.ts';

type Props = {
  infoOpts: {
    utdInfoSync: boolean;
    utdClientSync: boolean;
    utdAccess: boolean;
  };
  placeOpts: {
    utdSignage: boolean;
    utdEquipment: boolean;
    utdShelving: boolean;
    utdICUtils: boolean;
  };
  systemOpts: {
    utdTaskList: boolean;
    utdICLevels: boolean;
    utdTiming: boolean;
  };
  infoRemarks: string;
  placeRemarks: string;
  systemRemarks: string;
  accountManager: string;
  tagOthers: string[];
};

const cb = (checked: boolean): string => {
  return checked ? ':ballot_box_with_check:' : ':building_construction:';
};

// deno-fmt-ignore
export const qcRemarksText = {
  infoSync: 'Channel Description and general info is up-to-date',
  clientSync: 'Client feedback/vibe/needs synced with team',
  access: 'Site access is situated (protocols, badges, etc)',
  signage: 'Signage and labels are situated as needed',
  equipment: 'Equipment care and knowledge are provided',
  shelving: 'Storage shelving and areas are arranged',
  taskList: 'The shift task lists have up-to-date and ordered tasks',
  timing: 'Site timing, pacing, and efficiency are stable',
  icLevels: 'Inventory Center layout, levels, and thresholds are stable',
  icUtils: 'Utilities and supplies are provided if needed.',
};

export const qcRemarksTemplate = (p: Props) => (`
*INFO CHECKS*
> ${cb(p.infoOpts.utdInfoSync)} | ${qcRemarksText.infoSync}
> ${cb(p.infoOpts.utdClientSync)} | ${qcRemarksText.clientSync}
> ${cb(p.infoOpts.utdAccess)} | ${qcRemarksText.access}
_Remarks on information_: ${p.infoRemarks}
----------
*PLACE CHECKS*
> ${cb(p.placeOpts.utdSignage)} | ${qcRemarksText.signage}
> ${cb(p.placeOpts.utdEquipment)} | ${qcRemarksText.equipment}
> ${cb(p.placeOpts.utdShelving)} | ${qcRemarksText.shelving}
> ${cb(p.placeOpts.utdICUtils)} | ${qcRemarksText.icUtils}
_Remarks on place_: ${p.placeRemarks}
----------
*SYSTEM CHECKS*
> ${cb(p.systemOpts.utdTaskList)} | ${qcRemarksText.taskList}
> ${cb(p.systemOpts.utdICLevels)} | ${qcRemarksText.icLevels}
> ${cb(p.systemOpts.utdTiming)} | ${qcRemarksText.timing}
_Remarks on system_: ${p.systemRemarks}
----------
<!subteam^${constants.fieldOpsDefault.trim()}> <@${p.accountManager.trim()}> ${
  tagsToText(p.tagOthers)
}
`);
