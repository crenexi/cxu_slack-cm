import { Template } from '../constants/templates.ts';
import { formatDate, trimText } from '../helpers/helpers.ts';

import { ids as signageIds } from '../views/step3/form_signage/signage.blocks.ts';
import { ids as equipIds } from '../views/step3/form_equipment/equipment.blocks.ts';
import { ids as traineeIds } from '../views/step3/form_trainee/trainee.blocks.ts';
import { ids as qcStartingIds } from '../views/step3/form_qc-starting/qc-starting.blocks.ts';
import { ids as orderIds } from '../views/step3/form_order/order.blocks.ts';
import { ids as droIds } from '../views/step3/form_dro/dro.blocks.ts';

import signageTemplate from '../views/step3/form_signage/signage.template.ts';
import equipTemplate from '../views/step3/form_equipment/equipment.template.ts';
import traineeTemplate from '../views/step3/form_trainee/trainee.template.ts';
import qcStartingTemplate from '../views/step3/form_qc-starting/qc-starting.template.ts';
import orderTemplate from '../views/step3/form_order/order.template.ts';
import droTemplate from '../views/step3/form_dro/dro.template.ts';

type HandleCompose = (props: {
  user: string | undefined;
  template: Template;
  values: {
    // deno-lint-ignore no-explicit-any
    [key: string]: any;
  };
  getRealName: (userId: string) => Promise<string>;
}) => Promise<string>;

const handleCompose: HandleCompose = async (props) => {
  // console.log(values);

  const { user, template, values, getRealName } = props;
  const { title, emojiKey, isSlackDeprecated } = template;
  const emojiPrefix = isSlackDeprecated ? '' : `:${emojiKey}: | `;

  // Construct the header
  const subtitle = `${emojiPrefix}By <@${user}> | ${formatDate()}`;
  const header = `*${title.toUpperCase()}*\n${subtitle}\n----------`;

  // Helpers to extract relevant data from values
  const textValById = (id: string) => values[id].action.value;
  const dateValById = (id: string) => values[id].action.selected_date;
  const usersValById = (id: string) => values[id].action.selected_users;
  const userValById = (id: string) => values[id].action.selected_users[0];
  const cbValById = (id: string) => values[id].action.selected_options.length;

  // Construct the body
  const body: string = await (async () => {
    switch (template.key) {
      case 'signage':
        return signageTemplate({
          site: trimText(textValById(signageIds.site)),
          zone: trimText(textValById(signageIds.zone)),
          request: trimText(textValById(signageIds.request)),
          quantity: trimText(textValById(signageIds.quantity)),
          tags: usersValById(signageIds.tags),
        });
      case 'equipment':
        return equipTemplate({
          equipDesc: textValById(equipIds.equipDesc),
          equipZone: textValById(equipIds.equipZone),
          equipIssue: textValById(equipIds.equipIssue),
          accountManager: userValById(equipIds.accountManager),
          technicians: usersValById(equipIds.tehnicians),
        });
      case 'trainee':
        return traineeTemplate({
          trainee: await getRealName(userValById(traineeIds.trainee)),
          trainDate: formatDate(dateValById(traineeIds.trainDate)),
          listTrainScope: trimText(textValById(traineeIds.listTrainScope)),
          listTrainNext: trimText(textValById(traineeIds.listTrainNext)),
          listWentWell: trimText(textValById(traineeIds.listWentWell)),
        });
      case 'qcStarting':
        return qcStartingTemplate({
          greeting: trimText(textValById(qcStartingIds.greeting)),
          memo: textValById(qcStartingIds.memo)?.trim(),
        });
      case 'order':
        return orderTemplate({
          orderId: textValById(orderIds.orderId),
          orderRecap: textValById(orderIds.orderRecap),
          deliveryDate: formatDate(dateValById(orderIds.deliveryDate)),
          listUnavailable: trimText(textValById(orderIds.listUnavailable)),
          listChained: trimText(textValById(orderIds.listChained)),
          listICNeeds: trimText(textValById(orderIds.listICNeeds)),
          listEdits: trimText(textValById(orderIds.listEdits)),
          itemsPickup: trimText(textValById(orderIds.itemsPickup)),
          auditCheck: cbValById(orderIds.auditCheck) ? 'Yes' : 'No',
        });
      case 'dro':
        return droTemplate({
          opsGeneralMemo: trimText(textValById(droIds.opsGeneralMemo)),
          opsClientMemo: trimText(textValById(droIds.opsClientMemo)),
          opsDoneMemo: trimText(textValById(droIds.opsDoneMemo)),
          deliveryMissing: trimText(textValById(droIds.deliveryMissing)),
          deliveryDiscarded: trimText(textValById(droIds.deliveryDiscarded)),
          deliveryReturned: trimText(textValById(droIds.deliveryReturned)),
          prodAdjustments: trimText(textValById(droIds.prodAdjustments)),
          prodExpired: trimText(textValById(droIds.prodExpired)),
          prodPickup: trimText(textValById(droIds.prodPickup)),
        });
      default: {
        return 'No case found for this template key.';
      }
    }
  })();

  return `${header}\n${body.trim()}`;
};

export default handleCompose;
