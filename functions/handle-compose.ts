import { Template } from '../constants/templates.ts';
import { formatDate, trimText } from '../helpers/helpers.ts';
import { ids as orderIds } from '../views/step3/form_order/order.blocks.ts';
import { ids as signageIds } from '../views/step3/form_signage/signage.blocks.ts';
import { ids as traineeIds } from '../views/step3/form_trainee/trainee.blocks.ts';
import orderTemplate from '../views/step3/form_order/order.template.ts';
import signageTemplate from '../views/step3/form_signage/signage.template.ts';
import traineeTemplate from '../views/step3/form_trainee/trainee.template.ts';

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
  const { user, template, values, getRealName } = props;
  console.log(values);

  // Construct the header
  const title = `*${template.title.toUpperCase()} :${template.emojiKey}:*`;
  const subtitle = `By <@${user}> | ${formatDate()}`;
  const header = `${title}\n${subtitle}\n----------`;

  const textValById = (id: string) => values[id].action.value;
  const dateValById = (id: string) => values[id].action.selected_date;
  const usersValById = (id: string) => values[id].action.selected_users;
  const userValById = (id: string) => values[id].action.selected_users[0];
  const cbValById = (id: string) => values[id].action.selected_options.length;

  const selValById = (id: string) => {
    return values[id].action.selected_option.text.text;
  };

  // Construct the body
  const body: string = await (async () => {
    switch (template.key) {
      // Message: order
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
      // Message: signage
      case 'signage':
        return signageTemplate({
          site: trimText(textValById(signageIds.site)),
          zone: trimText(textValById(signageIds.zone)),
          priority: selValById(signageIds.priority),
          request: trimText(textValById(signageIds.request)),
          quantity: trimText(textValById(signageIds.quantity)),
          tags: usersValById(signageIds.tags),
        });
      // Message: trainee
      case 'trainee':
        return traineeTemplate({
          trainee: await getRealName(userValById(traineeIds.trainee)),
          trainDate: formatDate(dateValById(traineeIds.trainDate)),
          listTrainScope: trimText(textValById(traineeIds.listTrainScope)),
          listTrainNext: trimText(textValById(traineeIds.listTrainNext)),
          listWentWell: trimText(textValById(traineeIds.listWentWell)),
        });
      // Fallback
      default: {
        return 'No case found for this template key.';
      }
    }
  })();

  return `${header}\n${body.trim()}`;
};

export default handleCompose;
