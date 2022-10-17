import ids from '../../constants/block-ids.ts';
import { TaskBulkInput } from '../../types/types.ts';
import { header, plain } from '../../helpers/helpers.ts';

const pretextMrkdwn = `
Suggested format for each task request:
\`\`\`
Task name:
Task zone:
Task note:
Timing: standard
\`\`\`
Where priority _timing_ is *earlier*, *standard*, *later*, or *unsure*
`;

const pretext = {
  type: 'section',
  block_id: ids.taskBulk.pretext,
  text: {
    type: 'mrkdwn',
    text: pretextMrkdwn.trim(),
  },
};

const bulkRequest: TaskBulkInput = ({ id, label }) => ({
  type: 'input',
  block_id: id,
  optional: true,
  label: {
    type: 'plain_text',
    text: label,
    emoji: true,
  },
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    placeholder: plain('None'),
    multiline: true,
  },
});

const toAddRequest = bulkRequest({
  id: ids.taskBulk.toAdd,
  label: ':new: Add Tasks',
});

const toRemoveRequest = bulkRequest({
  id: ids.taskBulk.toRemove,
  label: ':end: Remove Tasks',
});

const toUpdateRequest = bulkRequest({
  id: ids.taskBulk.toUpdate,
  label: ':arrows_counterclockwise: Update Tasks',
});

const toReorderRequest = bulkRequest({
  id: ids.taskBulk.toReorder,
  label: ':arrow_up_down: Reorder Tasks',
});

const refPicsLink = {
  type: 'input',
  block_id: ids.taskBulk.refPicsLink,
  optional: true,
  label: {
    type: 'plain_text',
    text: ':link: Reference Pics',
    emoji: true,
  },
  hint: plain('Shared folder with named ref pics'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    placeholder: plain('URL'),
  },
};

const refPicsText = {
  type: 'section',
  block_id: ids.taskBulk.refPicsText,
  text: plain(
    'Consider adding relevant reference pics, either via a shared folder with the URL here, or attach pics after the sent message.',
  ),
};

export const taskBulkBlocks = [
  pretext,
  header('Request'),
  toAddRequest,
  toRemoveRequest,
  toUpdateRequest,
  toReorderRequest,
  header('Pics'),
  refPicsLink,
  refPicsText,
];
