import ids from '../../constants/block-ids.ts';
import { Compose } from '../../types/types.ts';
import {
  cbValByOption,
  textValById,
  usersValById,
  userValById,
} from '../../helpers/helpers.ts';
import { qcRemarksTemplate } from './qc-remarks.template.ts';

export const qcRemarksCompose: Compose = ({ values }) => {
  return qcRemarksTemplate({
    infoOpts: {
      utdInfoSync: cbValByOption({
        val: values[ids.qcRemarks.infoChecklist],
        opt: ids.qcRemarks.infoOpts.infoSync,
      }),
      utdClientSync: cbValByOption({
        val: values[ids.qcRemarks.infoChecklist],
        opt: ids.qcRemarks.infoOpts.clientSync,
      }),
      utdAccess: cbValByOption({
        val: values[ids.qcRemarks.infoChecklist],
        opt: ids.qcRemarks.infoOpts.access,
      }),
    },
    placeOpts: {
      utdSignage: cbValByOption({
        val: values[ids.qcRemarks.placeChecklist],
        opt: ids.qcRemarks.placeOpts.signage,
      }),
      utdEquipment: cbValByOption({
        val: values[ids.qcRemarks.placeChecklist],
        opt: ids.qcRemarks.placeOpts.equipment,
      }),
      utdShelving: cbValByOption({
        val: values[ids.qcRemarks.placeChecklist],
        opt: ids.qcRemarks.placeOpts.shelving,
      }),
      utdICUtils: cbValByOption({
        val: values[ids.qcRemarks.placeChecklist],
        opt: ids.qcRemarks.placeOpts.icUtils,
      }),
    },
    systemOpts: {
      utdTaskList: cbValByOption({
        val: values[ids.qcRemarks.systemChecklist],
        opt: ids.qcRemarks.systemOpts.taskList,
      }),
      utdICLevels: cbValByOption({
        val: values[ids.qcRemarks.systemChecklist],
        opt: ids.qcRemarks.systemOpts.icLevels,
      }),
      utdTiming: cbValByOption({
        val: values[ids.qcRemarks.systemChecklist],
        opt: ids.qcRemarks.systemOpts.timing,
      }),
    },
    infoRemarks: textValById(values[ids.qcRemarks.infoRemarks]),
    placeRemarks: textValById(values[ids.qcRemarks.placeRemarks]),
    systemRemarks: textValById(values[ids.qcRemarks.systemRemarks]),
    accountManager: userValById(values[ids.qcRemarks.accountManager]),
    tagOthers: usersValById(values[ids.qcRemarks.otherTags]),
  });
};
