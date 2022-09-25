type triggerWorkflow = '`${string}#/workflows/${string}`';

/* General meta */
const title = 'Ops Message';
const description = 'Builder to send common Crafty messages';
const actionLabel = 'Build Message';

const constants = {
  manifest: { title, description },
  trigger: {
    description,
    name: actionLabel,
    workflow: '#/workflows/buildm_workflow' as triggerWorkflow,
    buttonLabel: actionLabel,
  },
  workflow: {
    title,
    description,
    id: 'buildm_workflow',
  },
  views: {
    choose: {
      submitLabel: 'Continue',
    },
    write: {
      submitLabel: 'Build & Send',
    },
  },
  functions: {
    flow: {
      description,
      id: 'flow_function',
      srcFile: 'functions/flow_function.ts',
      title: actionLabel,
    },
  },
};

export default constants;
