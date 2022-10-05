import { Template } from '../constants/templates.ts';
import droTemplate from '../views/step3/form_dro/dro.template.ts';
import orderTemplate from '../views/step3/form_order/order.template.ts';
import expiredTemplate from '../views/step3/form_expired/expired.template.ts';
import traineeTemplate from '../views/step3/form_trainee/trainee.template.ts';

type HandleCompose = (props: {
  user: string | undefined;
  template: Template;
  values: {
    // deno-lint-ignore no-explicit-any
    [key: string]: any;
  };
}) => string;

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

const handleCompose: HandleCompose = ({ user, template }) => {
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
