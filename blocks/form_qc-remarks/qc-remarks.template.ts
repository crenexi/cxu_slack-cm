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
  return checked ? ':ballot_box_with_check:' : ':white_square:';
};

// deno-fmt-ignore
export const qcRemarksText = {
  infoSync: 'Channel Description and Site Landscape slides are up-to-date',
  clientSync: 'Client feedback/vibe/needs synced with team',
  access: 'Site access is situated (protocols, badges, etc)',
  signage: 'Signage and labels are situated as needed',
  equipment: 'Equipment care and knowledge are provided',
  shelving: 'Storage shelving and areas are arranged',
  taskList: 'The shift task lists have up-to-date and ordered tasks',
  timing: 'Site timing, pacing, and efficiency are stable',
  icLevels: 'Inventory Center layout, levels, and thresholds are stable',
  icUtils: 'Utilities and supplies are provided if needed. Example: cart, stool, paper towels, wipes, wrench, line cleaning, et cetera',
};

export const qcRemarksTemplate = (p: Props) => (`
*INFO CHECKS*

${cb(p.infoOpts.utdInfoSync)} | ${qcRemarksText.infoSync}
${cb(p.infoOpts.utdClientSync)} | ${qcRemarksText.clientSync}
${cb(p.infoOpts.utdAccess)} | ${qcRemarksText.access}

Remarks on information: ${p.infoRemarks}
----------
*PLACE CHECKS*

${cb(p.placeOpts.utdSignage)} | ${qcRemarksText.signage}
${cb(p.placeOpts.utdEquipment)} | ${qcRemarksText.equipment}
${cb(p.placeOpts.utdShelving)} | ${qcRemarksText.shelving}
${cb(p.placeOpts.utdICUtils)} | ${qcRemarksText.icUtils}

Remarks on place: ${p.placeRemarks}
----------
*SYSTEM CHECKS*

${cb(p.systemOpts.utdTaskList)} | ${qcRemarksText.taskList}
${cb(p.systemOpts.utdICLevels)} | ${qcRemarksText.icLevels}
${cb(p.systemOpts.utdTiming)} | ${qcRemarksText.timing}

Remarks on system: ${p.systemRemarks}
----------
<@ba-fieldops> <@${p.accountManager}> ${tagsToText(p.tagOthers)}
`);
