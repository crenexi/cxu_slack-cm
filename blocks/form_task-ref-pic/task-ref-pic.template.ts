import constants from '../../constants/constants.ts';

type Props = {
  site: string;
  zone: string;
  task: string;
  picsLink: string;
  currPic: string;
};

const refPics = (link: string) => {
  if (link) {
    return `:open_file_folder: <${link}|Reference Photos Here>`;
  }

  return ':arrow_down: Reference photos attached below';
};

export const taskRefPicTemplate = (p: Props) => (`
Location/client: ${p.site}
Area/zone: ${p.zone}
Task: ${p.task}
----------
Existing ref pics: ${p.currPic}
*${refPics(p.picsLink)?.trim()}*
----------
<!subteam^${constants.fieldOpsDefault}>
`);
