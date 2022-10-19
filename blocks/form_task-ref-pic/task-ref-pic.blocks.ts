import ids from '../../constants/block-ids.ts';
import { header, option, plain } from '../../helpers/helpers.ts';

const site = {
  type: 'input',
  block_id: ids.taskRefPic.site,
  label: plain('Location/Client'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    max_length: 50,
    placeholder: plain('Block Market'),
  },
};

const zone = {
  type: 'input',
  block_id: ids.taskRefPic.zone,
  label: plain('Floor/Zone'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    max_length: 50,
    placeholder: plain('L7 Kitchen'),
  },
};

const task = {
  type: 'input',
  block_id: ids.taskRefPic.task,
  label: plain('Task'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    max_length: 50,
    placeholder: plain('Stock beverages'),
  },
};

const picsPrompt = {
  type: 'section',
  block_id: ids.taskRefPic.picsPrompt,
  text: {
    type: 'mrkdwn',
    text:
      '*Attach the new reference photo(s) after the sent message*. Or, add them to a shared folder and add the URL:',
  },
};

const picsLink = {
  type: 'input',
  block_id: ids.taskRefPic.picsLink,
  optional: true,
  label: {
    type: 'plain_text',
    text: 'Reference Pics',
    emoji: true,
  },
  hint: plain('Shared folder with named ref pics'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    placeholder: plain('URL'),
  },
};

const currPicOptions = [
  option({
    value: 'missing',
    text: 'None exist yet',
  }),
  option({
    value: 'keep',
    text: 'Just add another',
  }),
  option({
    value: 'replace',
    text: 'Replace with new',
  }),
];

const currPic = {
  type: 'input',
  block_id: ids.taskRefPic.currPic,
  label: plain('Existing reference photos:'),
  element: {
    type: 'static_select',
    action_id: 'action',
    placeholder: plain('Select'),
    initial_option: currPicOptions[0],
    options: currPicOptions,
  },
};

export const taskRefPicBlocks = [
  header(':heavy_check_mark: Task'),
  site,
  zone,
  task,
  header(':link: Photo'),
  picsPrompt,
  picsLink,
  currPic,
];
