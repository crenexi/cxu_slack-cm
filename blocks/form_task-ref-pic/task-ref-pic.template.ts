type Props = {
  site: string;
  zone: string;
  task: string;
  currPic: string;
  picsLink: string;
};

const refPics = (link: string) => {
  if (link) {
    return `:open_file_folder: <${link}|Reference Pictures Here>`;
  }

  return ':arrow_down: Reference Pictures attached below';
};

export const taskRefPicTemplate = (p: Props) => (`
Location/client: ${p.site},
Area/zone: ${p.zone},
Task: ${p.task}
----------
Existing ref pics: *${p.currPic}*
*${refPics(p.picsLink)}*
----------
<@ba-fieldops>
`);
