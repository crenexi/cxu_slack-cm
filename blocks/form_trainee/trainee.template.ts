import constants from '../../constants/constants.ts';

type Props = {
  operator: string;
  trainDate: string;
  listTrainScope: string;
  listTrainNext: string;
  listWentWell: string;
};

export const traineeTemplate = (p: Props) => (`
Trainee/operator: *${p.operator?.trim()}*
Training date: ${p.trainDate}
----------
Training covered: ${p.listTrainScope}
Areas of opportunity: ${p.listTrainNext}
What went well: ${p.listWentWell}
----------
<!subteam^${constants.fieldOpsDefault.trim()}>
`);
