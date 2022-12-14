import constants from '../../constants/constants.ts';

type Props = {
  actionType: string;
  taskRequest: string;
  taskZone: string;
  taskNote: string;
  timing: string;
};

const taskNote = (str: string) => {
  return !str ? '' : `\nTask note: ${str}`;
};

export const taskSingleTemplate = (p: Props) => (`
Request to *${p.actionType}* task:
*${p.taskRequest?.trim()}*

Task zone: ${p.taskZone}${taskNote(p.taskNote)}
Timing: ${p.timing}
----------
<!subteam^${constants.fieldOpsDefault.trim()}>
`);
