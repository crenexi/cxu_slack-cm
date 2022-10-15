import ids from '../../constants/block-ids.ts';
import { Compose } from '../../types/types.ts';
import { textValById, usersValById } from '../../helpers/helpers.ts';
import { signageTemplate } from './signage.template.ts';

export const signageCompose: Compose = ({ values }) => {
  return signageTemplate({
    site: textValById(values[ids.signage.site]),
    zone: textValById(values[ids.signage.zone]),
    request: textValById(values[ids.signage.request]),
    quantity: textValById(values[ids.signage.quantity]),
    tags: usersValById(values[ids.signage.tags]),
  });
};
