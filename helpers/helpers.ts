export const trimText = (str: string | undefined) => {
  if (!str) return 'n/a';
  return str.length < 10 ? str.trim() : `\n${str.trim()}`;
};

export const formatDate = (date?: string) => {
  const n = !date ? new Date() : new Date(`${date}T00:00:00Z`);

  const YY = String(n.getFullYear()).split('').slice(-2).join('');
  const MM = n.toLocaleString('en-US', { month: '2-digit', timeZone: 'UTC' });
  const DD = n.toLocaleString('en-US', { day: '2-digit', timeZone: 'UTC' });
  const DDD = n.toLocaleString('en-US', { weekday: 'short', timeZone: 'UTC' });

  return `${DDD}, ${MM}-${DD}-${YY}`;
};

export const today = () => {
  const n = new Date();
  const offset = n.getTimezoneOffset();
  const nOffset = new Date(n.getTime() - (offset * 60 * 1000));
  return nOffset.toISOString().split('T')[0];
};
