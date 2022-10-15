import ids from '../../constants/block-ids.ts';
import { Compose } from '../../types/types.ts';
import {
  cbValById,
  dateValById,
  formatDate,
  textValById,
} from '../../helpers/helpers.ts';
import { orderTemplate } from './order.template.ts';

export const orderCompose: Compose = ({ values }) => {
  return orderTemplate({
    orderId: textValById(values[ids.order.orderId]),
    orderRecap: textValById(values[ids.order.orderRecap]),
    deliveryDate: formatDate(dateValById(values[ids.order.deliveryDate])),
    listUnavailable: textValById(values[ids.order.listUnavailable]),
    listChained: textValById(values[ids.order.listChained]),
    listICNeeds: textValById(values[ids.order.listICNeeds]),
    listEdits: textValById(values[ids.order.listEdits]),
    itemsPickup: textValById(values[ids.order.itemsPickup]),
    auditCheck: cbValById(values[ids.order.auditCheck]),
  });
};
