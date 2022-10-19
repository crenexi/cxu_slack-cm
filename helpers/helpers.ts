import { OptionBlock, Plain, ValById, ValByOption } from '../types/types.ts';

// Block helpers for divider and plain text
export const divider = { type: 'divider' };
export const plain = (text: string): Plain => ({ text, type: 'plain_text' });

// Block helper for header
export const header = (text: string) => ({
  type: 'header',
  text: {
    text: text.toUpperCase(),
    type: 'plain_text',
    emoji: true,
  },
});

// Block header for option
export const option: OptionBlock = ({ value, text }) => ({
  value,
  text: {
    text,
    type: 'plain_text',
    emoji: true,
  },
});

// Helpers to extract relevant data from values
export const dateValById: ValById = (v) => v.action.selected_date;
export const usersValById: ValById = (v) => v.action.selected_users;
export const userValById: ValById = (v) => v.action.selected_users[0];
export const selValById: ValById = (v) => v.action.selected_option.value;

export const cbValById: ValById = (v) => {
  const isChecked = v.action.selected_options.length > 0;
  return isChecked ? 'Yes' : 'No';
};

// Helpers to extract relevant data from text input
export const textValById: ValById = (v, opts = { default: 'n/a' }) => {
  const str = v.action.value;

  // Return default if input is empty
  if (!str) return opts.default;

  // Trim and add newline to long text
  return str.length < 30 ? str.trim() : `\n${str.trim()}`;
};

// Helpers to extract relevant data from checkbox options
export const cbValByOption: ValByOption = ({ val, opt }) => {
  return val.action.selected_options.some((o) => o.value === opt);
};

// Helper to turn tags into marked string
export const tagsToText = (tags: string[]) => {
  return tags.reduce((str, tag, i) => {
    return i === 0 ? `<@${tag}>` : `${str} <@${tag}>`;
  }, '');
};

// Helper to format date generally
export const formatDate = (date?: string) => {
  const n = !date ? new Date() : new Date(`${date}T00:00:00`);

  const YY = String(n.getFullYear()).split('').slice(-2).join('');
  const MM = n.toLocaleString('en-US', { month: '2-digit' });
  const DD = n.toLocaleString('en-US', { day: '2-digit' });
  const DDD = n.toLocaleString('en-US', { weekday: 'short' });

  return `${DDD}, ${MM}-${DD}-${YY}`;
};

// Helper to get current date
export const today = () => {
  const n = new Date();
  const offset = n.getTimezoneOffset();
  const nOffset = new Date(n.getTime() - (offset * 60 * 1000));
  return nOffset.toISOString().split('T')[0];
};
