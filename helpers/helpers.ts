import { ValById } from '../types/types.ts';

// Block helpers for divider and plain text
export const divider = { type: 'divider' };
export const plain = (text: string) => ({ text, type: 'plain_text' });

// Block helper for header
export const header = (text: string) => ({
  type: 'header',
  text: {
    text,
    type: 'plain_text',
    emoji: true,
  },
});

// Helpers to extract relevant data from values
export const textValById: ValById = (v) => trimText(v.action.value);
export const dateValById: ValById = (v) => v.action.selected_date;
export const usersValById: ValById = (v) => v.action.selected_users;
export const userValById: ValById = (v) => v.action.selected_users[0];
export const cbValById: ValById = (v) => v.action.selected_options.length;

// Helper to turn tags into marked string
export const tagsToText = (tags: string[]) => {
  return tags.reduce((str, tag, i) => {
    return i === 0 ? `<@${tag}>` : `${str} <@${tag}>`;
  }, '');
};

// Helper to trim text and add n/a if null
export const trimText = (str: string | undefined) => {
  if (!str) return 'n/a';
  return str.length < 15 ? str.trim() : `\n${str.trim()}`;
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
