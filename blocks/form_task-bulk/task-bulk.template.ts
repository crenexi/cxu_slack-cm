import constants from '../../constants/constants.ts';

type Props = {
  toAdd: string;
  toRemove: string;
  toUpdate: string;
  toReorder: string;
  refPicsLink: string;
};

type InputSection = {
  title: string;
  emoji: string;
  input: string;
};

export const taskBulkTemplate = (p: Props) => {
  const { toAdd, toRemove, toUpdate, toReorder } = p;
  const divider = '----------';

  // Ensure input exists
  const inputExists = !![toAdd, toRemove, toUpdate, toReorder].join('');
  if (!inputExists) throw new Error('No input provided');

  const inputSections: InputSection[] = [
    {
      title: 'Add Tasks',
      emoji: 'new',
      input: toAdd,
    },
    {
      title: 'Remove Tasks',
      emoji: 'end',
      input: toRemove,
    },
    {
      title: 'Update Tasks',
      emoji: 'arrows_counterclockwise',
      input: toUpdate,
    },
    {
      title: 'Reorder Tasks',
      emoji: 'arrow_up_down',
      input: toReorder,
    },
  ];

  // Sections add/remove/update/reorder
  const body = inputSections
    .filter((section) => !!section.input)
    .reduce((str, section, i) => {
      const isFirst = (i === 0);
      const { title, emoji, input } = section;
      const sectionStr =
        `:${emoji}: *${title.toUpperCase()?.trim()}*\n${input}`;

      // First section
      if (isFirst) return sectionStr;

      // Subsequent sections
      return `${str}\n${divider}\n${sectionStr}`;
    }, '');

  // Bottom tags
  const tags = `<!subteam^${constants.fieldOpsDefault.trim()}>`;

  // URL for reference pictures, if provided
  if (p.refPicsLink) {
    const link = `<${p.refPicsLink}|Reference Pictures Available>`;
    return `\n${body}\n${divider}\n${link}\n${tags}`;
  }

  // Otherwise just return body and tags
  return `${body}\n${divider}\n<!subteam^${constants.fieldOpsDefault.trim()}>`;
};
