import { qcRemarksTemplate } from './qc-remarks.template.ts';

export const qcRemarksCompose = () => {
  return qcRemarksTemplate({
    infoRemarks: 'Test',
    landscapeRemarks: 'Test',
    shiftRemarks: 'Test',
    inventoryRemarks: 'Test',
    utdDescription: false,
    utdLandscape: false,
    utdClientSync: false,
    utdAccess: false,
    utdSignage: false,
    utdEquipment: false,
    utdShelving: false,
    utdDiscard: false,
    utdTaskList: false,
    utdTaskOrder: false,
    utdTiming: false,
    utdICLevels: false,
    utdICLayout: false,
    utdICUtils: false,
  });
};
