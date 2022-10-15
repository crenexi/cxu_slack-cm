type Props = {
  infoRemarks: string;
  landscapeRemarks: string;
  shiftRemarks: string;
  inventoryRemarks: string;
  utdDescription: boolean;
  utdLandscape: boolean;
  utdClientSync: boolean;
  utdAccess: boolean;
  utdSignage: boolean;
  utdEquipment: boolean;
  utdShelving: boolean;
  utdDiscard: boolean;
  utdTaskList: boolean;
  utdTaskOrder: boolean;
  utdTiming: boolean;
  utdICLevels: boolean;
  utdICLayout: boolean;
  utdICUtils: boolean;
};

const cb = (checked: boolean): string => {
  return checked ? ':heavy_check_mark: |' : 'heavy_minus_sign: |';
};

export const qcRemarksTemplate = (p: Props) => (`
:pencil: *INFO CHECK*
${cb(p.utdDescription)} Site Description is up-to-date (Slack)
${cb(p.utdLandscape)} Site Landscape is up-to-date (slide)
${cb(p.utdClientSync)} Client feedback/vibe/needs synced with team
Remarks on information: ${p.infoRemarks}
----------
:office: *SITE LANDSCAPE*
${cb(p.utdAccess)} Site access is situated (protocols, badges, etc)
${cb(p.utdSignage)} Signage and labels are situated as needed
${cb(p.utdEquipment)} Equipment care and knowledge are provided
${cb(p.utdShelving)} Storage shelving and areas are arranged
${cb(p.utdDiscard)} Trash discard methods are understood
Remarks on landscape: ${p.landscapeRemarks}
----------
:clock10: *SHIFT FLOW*
${cb(p.utdTaskList)} The shift task lists have up-to-date tasks
${cb(p.utdTaskOrder)} The shift task lists are ordered appropriately
${cb(p.utdTiming)} Site timing, pacing, and efficiency are stable
Remarks on shift: ${p.shiftRemarks}
----------
:scales: *INVENTORY STATE*
${cb(p.utdICLevels)} Inventory levels and auto-order settings are stable
${cb(p.utdICLayout)} Inventory Center layout is situated as needed
${cb(p.utdICUtils)} Utilities and supplies are provided if needed*
Remarks on inventory: ${p.inventoryRemarks}
*_Based on site needs; may include cart, stool, paper towels, wipes, wrench, line cleaning kit, other_
`);
