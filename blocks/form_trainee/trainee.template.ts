type Props = {
  trainee: string;
  trainDate: string;
  listTrainScope: string;
  listTrainNext: string;
  listWentWell: string;
};

export const traineeTemplate = (p: Props) => (`
Trainee/operator: *${p.trainee}*
Training date: ${p.trainDate}
----------
Training covered: ${p.listTrainScope}
Areas of opportunity: ${p.listTrainNext}
What went well: ${p.listWentWell}
----------
@ba-fieldops
`);
