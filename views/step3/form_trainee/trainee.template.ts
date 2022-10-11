interface Props {
  trainee: string;
  trainDate: string;
  listTrainScope: string;
  listTrainNext: string;
  listWentWell: string;
}

const traineeTemplate = (p: Props) => (`
_Operator_: *${p.trainee}*
_Training date_: ${p.trainDate}
_Training covered_: ${p.listTrainScope}
_Areas of opportunity_: ${p.listTrainNext}
_What went well_: ${p.listWentWell}
----------
@ba-fieldops
`);

export default traineeTemplate;
