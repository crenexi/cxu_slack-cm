import ids from '../../constants/block-ids.ts';
import { Compose } from '../../types/types.ts';
import { dateValById, formatDate, textValById } from '../../helpers/helpers.ts';
import { traineeTemplate } from './trainee.template.ts';

export const traineeCompose: Compose = ({ values }) => {
  return traineeTemplate({
    operator: textValById(values[ids.trainee.operator]),
    trainDate: formatDate(dateValById(values[ids.trainee.trainDate])),
    listTrainScope: textValById(values[ids.trainee.listTrainScope]),
    listTrainNext: textValById(values[ids.trainee.listTrainNext]),
    listWentWell: textValById(values[ids.trainee.listWentWell]),
  });
};
