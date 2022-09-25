type triggerWorkflow = '`${string}#/workflows/${string}`';

const constants = {
  buildm: {
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
      expired: {
        id: 'buildm_expired_function',
        srcFile: 'functions/buildm_expired_function.ts',
        title: 'Build expired message',
        desc: 'Generates the expired product message',
      },
    },
  },
};

export default constants;
