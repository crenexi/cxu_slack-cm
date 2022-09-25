type triggerWorkflow = '`${string}#/workflows/${string}`';

const constants = {
  trigger: {
    name: 'Build Message',
    desc: 'Utility to generate common Crafty messages.',
    workflow: '#/workflows/buildm_workflow' as triggerWorkflow,
    buttonLabel: 'Build Message',
  },
  workflow: {
    id: 'buildm_workflow',
    title: 'Send a message',
    desc: 'Send a message to a site channel',
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
      id: 'flow_function',
      srcFile: 'functions/flow_function.ts',
      title: 'Build message',
      desc: 'Builder to generate a message',
    },
  },
};

export default constants;
