import { Template } from '../constants/constants.ts';
import droTemplate from './templates/dro_template.ts';
import orderTemplate from './templates/order_template.ts';
import expiredTemplate from './templates/expired_template.ts';
import traineeTemplate from './templates/dro_template.ts';

type Props = {
  user: string | undefined;
  template: Template;
  values: {
    // deno-lint-ignore no-explicit-any
    [key: string]: any;
  };
};

const timeFormatted = () => {
  // deno-lint-ignore no-explicit-any
  const options: any = {
    weekday: 'short',
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  const dt = new Date().toLocaleDateString('en-US', options);
  return dt.split(', ').join(' - ');
};

const handleCompose = ({ user, template }: Props): string => {
  // Construct the header
  const title = `*${template.title.toUpperCase()} :${template.emojiKey}:*`;
  const subtitle = `By <@${user}> | ${timeFormatted()}`;
  const header = `${title}\n${subtitle}\n----------`;

  // Construct the body
  const body: string = (() => {
    switch (template.key) {
      // Message: DRO
      case 'dro':
        return droTemplate({
          accountManager: 'TODO',
        });
      // Message: order
      case 'order':
        return orderTemplate({
          accountManager: 'TODO',
        });
      // Message: expired
      case 'expired':
        return expiredTemplate({
          name: 'TODO',
          quantity: 99,
          bbDate: 'TODO',
          accountManager: 'TODO',
        });
      // Message: trainee
      case 'trainee':
        return traineeTemplate({
          accountManager: 'TODO',
        });
      // Fallback
      default: {
        return 'Something went wrong.';
      }
    }
  })();

  return `${header}\n${body.trim()}`;
};

export default handleCompose;
