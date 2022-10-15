import { HandleCompose } from '../types/types.ts';
import ids from '../constants/block-ids.ts';
import { formatDate, trimText } from '../helpers/helpers.ts';

import { equipmentTemplate } from '../blocks/form_equipment/equipment.template.ts';
import { traineeTemplate } from '../blocks/form_trainee/trainee.template.ts';
import { qcStartingTemplate } from '../blocks/form_qc-starting/qc-starting.template.ts';
import { orderTemplate } from '../blocks/form_order/order.template.ts';
import { droTemplate } from '../blocks/form_dro/dro.template.ts';

import { signageCompose } from '../blocks/form_signage/signage.compose.ts';
import { qcRemarksCompose } from '../blocks/form_qc-remarks/qc-remarks.compose.ts';

export const handleCompose: HandleCompose = async (props) => {
  // console.log(values);

  const { user, template, values, getRealName } = props;
  const { title, emojiKey, isSlackDeprecated } = template;
  const emojiPrefix = isSlackDeprecated ? '' : `:${emojiKey}: | `;

  // Construct the header
  const subtitle = `${emojiPrefix}By <@${user}> | ${formatDate()}`;
  const header = `*${title.toUpperCase()}*\n${subtitle}\n----------`;

  // Construct the body
  const body: string = await (async () => {
    switch (template.key) {
      case 'signage':
        return signageCompose({ values });
      // case 'equipment':
      //   return equipmentTemplate({
      //     equipDesc: textValById(ids.equipment.equipDesc),
      //     equipZone: textValById(ids.equipment.equipZone),
      //     equipIssue: textValById(ids.equipment.equipIssue),
      //     accountManager: userValById(ids.equipment.accountManager),
      //     technicians: usersValById(ids.equipment.tehnicians),
      //   });
      // case 'trainee':
      //   return traineeTemplate({
      //     trainee: await getRealName(userValById(ids.trainee.trainee)),
      //     trainDate: formatDate(dateValById(ids.trainee.trainDate)),
      //     listTrainScope: trimText(textValById(ids.trainee.listTrainScope)),
      //     listTrainNext: trimText(textValById(ids.trainee.listTrainNext)),
      //     listWentWell: trimText(textValById(ids.trainee.listWentWell)),
      //   });
      // case 'qcStarting':
      //   return qcStartingTemplate({
      //     greeting: trimText(textValById(ids.qcStarting.greeting)),
      //     memo: textValById(ids.qcStarting.memo)?.trim(),
      //   });
      // case 'qcRemarks':
      //   return qcRemarksCompose();
      // case 'order':
      //   return orderTemplate({
      //     orderId: textValById(ids.order.orderId),
      //     orderRecap: textValById(ids.order.orderRecap),
      //     deliveryDate: formatDate(dateValById(ids.order.deliveryDate)),
      //     listUnavailable: trimText(textValById(ids.order.listUnavailable)),
      //     listChained: trimText(textValById(ids.order.listChained)),
      //     listICNeeds: trimText(textValById(ids.order.listICNeeds)),
      //     listEdits: trimText(textValById(ids.order.listEdits)),
      //     itemsPickup: trimText(textValById(ids.order.itemsPickup)),
      //     auditCheck: cbValById(ids.order.auditCheck) ? 'Yes' : 'No',
      //   });
      // case 'dro':
      //   return droTemplate({
      //     opsGeneralMemo: trimText(textValById(ids.dro.opsGeneralMemo)),
      //     opsClientMemo: trimText(textValById(ids.dro.opsClientMemo)),
      //     opsDoneMemo: trimText(textValById(ids.dro.opsDoneMemo)),
      //     deliveryMissing: trimText(textValById(ids.dro.deliveryMissing)),
      //     deliveryDiscarded: trimText(textValById(ids.dro.deliveryDiscarded)),
      //     deliveryReturned: trimText(textValById(ids.dro.deliveryReturned)),
      //     prodAdjustments: trimText(textValById(ids.dro.prodAdjustments)),
      //     prodExpired: trimText(textValById(ids.dro.prodExpired)),
      //     prodPickup: trimText(textValById(ids.dro.prodPickup)),
      //   });
      default: {
        return 'No case found for this template key.';
      }
    }
  })();

  return `${header}\n${body.trim()}`;
};
