import { Template } from '../constants/templates.ts';
import { ids as orderIds } from '../views/step3/form_order/order.blocks.ts';
import orderTemplate from '../views/step3/form_order/order.template.ts';
import traineeTemplate from '../views/step3/form_trainee/trainee.template.ts';

type HandleCompose = (props: {
  user: string | undefined;
  template: Template;
  values: {
    // deno-lint-ignore no-explicit-any
    [key: string]: any;
  };
}) => string;

const trimText = (str: string | undefined) => {
  if (!str) return 'n/a';
  return str.length < 10 ? str.trim() : `\n${str.trim()}`;
};

const formatDate = (date?: string) => {
  const n = !date ? new Date() : new Date(`${date}T00:00:00Z`);

  const YY = String(n.getFullYear()).split('').slice(-2).join('');
  const MM = n.toLocaleString('en-US', { month: '2-digit', timeZone: 'UTC' });
  const DD = n.toLocaleString('en-US', { day: '2-digit', timeZone: 'UTC' });
  const DDD = n.toLocaleString('en-US', { weekday: 'short', timeZone: 'UTC' });

  return `${DDD}, ${MM}-${DD}-${YY}`;
};

const handleCompose: HandleCompose = ({ user, template, values }) => {
  // console.log(values);

  // Construct the header
  const title = `*${template.title.toUpperCase()} :${template.emojiKey}:*`;
  const subtitle = `By <@${user}> | ${formatDate()}`;
  const header = `${title}\n${subtitle}\n----------`;

  const textValById = (id: string) => values[id].action.value;
  const dateValById = (id: string) => values[id].action.selected_date;
  // const userValById = (id: string) => values[id].action.selected_users[0];
  const cbValById = (id: string) => values[id].action.selected_options.length;

  // Construct the body
  const body: string = (() => {
    switch (template.key) {
      // Message: order
      case 'order':
        return orderTemplate({
          orderId: textValById(orderIds.orderId),
          orderRecap: textValById(orderIds.orderRecap),
          deliveryDate: formatDate(dateValById(orderIds.deliveryDate)),
          // accountManager: userValById(orderIds.accountManager),
          listUnavailable: trimText(textValById(orderIds.listUnavailable)),
          listChained: trimText(textValById(orderIds.listChained)),
          listICNeeds: trimText(textValById(orderIds.listICNeeds)),
          listEdits: trimText(textValById(orderIds.listEdits)),
          itemsPickup: trimText(textValById(orderIds.itemsPickup)),
          auditCheck: cbValById(orderIds.auditCheck) ? 'Yes' : 'No',
        });
      // Message: trainee
      case 'trainee':
        return traineeTemplate({
          accountManager: 'TODO',
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
