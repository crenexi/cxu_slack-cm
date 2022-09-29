import { DefineFunction, Schema, ViewsRouter } from 'deno-slack-sdk/mod.ts';
import type { SlackFunctionHandler } from 'deno-slack-sdk/types.ts';
import { SlackAPI } from 'deno-slack-api/mod.ts';
import step1View from './views/step1_view.ts';
import step2View from './views/step2_view.ts';
import { selectedTemplate } from './blocks/input-template_blocks.ts';
import { selectedChannel } from './blocks/input-channel_blocks.ts';
import { Template } from '../constants/constants.ts';
import c from '../constants/constants.ts';
import droTemplate from './templates/dro_template.ts';
import orderTemplate from './templates/order_template.ts';
import expiredTemplate from './templates/expired_template.ts';
import traineeTemplate from './templates/dro_template.ts';

//## Types

type ViewMetadata = {
  channel: string;
  template: Template;
};

type HandleCompose = (props: {
  user: string;
  template: Template;
  values: {
    // deno-lint-ignore no-explicit-any
    [key: string]: any;
  };
}) => string;

//## Function Definition

const inputProps = {
  interactivity: { type: Schema.slack.types.interactivity },
  channel: { type: Schema.slack.types.channel_id },
  user: { type: Schema.slack.types.user_id },
};

const outputProps = {
  channel: { type: Schema.slack.types.channel_id },
  message: { type: Schema.slack.types.rich_text },
};

export const FlowFn = DefineFunction({
  callback_id: 'flow_function',
  title: c.general.title,
  description: c.general.description,
  source_file: 'functions/flow_function.ts',
  input_parameters: {
    properties: { ...inputProps },
    required: ['interactivity'],
  },
  output_parameters: {
    properties: { ...outputProps },
    required: ['channel', 'message'],
  },
});

//## Function Handling

export const Flow: SlackFunctionHandler<
  typeof FlowFn.definition
> = async ({ inputs, token }) => {
  const client = SlackAPI(token);
  const channel = inputs.channel;

  await client.views.open({
    interactivity_pointer: inputs.interactivity.interactivity_pointer,
    view: step1View({ channel }),
  });

  return {
    // Set to false; we'll set complete status in view submission handler
    completed: false,
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

const handleCompose: HandleCompose = ({ user, template, values }) => {
  // Construct the header
  const title = `*${template.title.toUpperCase()} :${template.emojiKey}:*`;
  const subtitle = `By <@${user}> | ${timeFormatted()}`;
  const header = `${title}\n${subtitle}\n----------`;

  // Construct the body
  switch (template.key) {
    case 'dro': {
      const body = droTemplate({
        accountManager: 'TODO',
      });

      return `${header}\n${body.trim()}`;
    }
    default: {
      return `${header}\n'Something went wrong.'`;
    }
  }
};

const handleViewClosed = () => {
  console.log('Flow cancelled');
};

const ViewRouter = ViewsRouter(FlowFn);
export const { viewSubmission, viewClosed } = ViewRouter
  .addSubmissionHandler('step1', async ({ token, view }) => {
    const client = SlackAPI(token);

    // Get selected template and channel from state
    const templateKey = selectedTemplate({ state: view.state });
    const channel = selectedChannel({ state: view.state });

    // Note channel name from API info
    const channelName = await client.apiCall(
      'conversations.info',
      { token, channel },
    ).then((res) => res.channel.name);

    return {
      response_action: 'update',
      view: step2View({ channel, channelName, templateKey }),
    };
  })
  .addSubmissionHandler('step2', async ({ token, inputs, body, view }) => {
    // Validate metadata existence
    if (!view.private_metadata) {
      throw new Error('View metadata is undefined!');
    }

    // Get data
    const metadata: ViewMetadata = JSON.parse(<string> view.private_metadata);
    const { channel, template } = metadata;
    const { values } = view.state;
    const { user } = inputs;

    // Get channel and compose message
    const message = handleCompose({ user, template, values });

    // Complete flow
    const client = SlackAPI(token);
    await client.functions.completeSuccess({
      function_execution_id: body.function_data.execution_id,
      outputs: { channel, message },
    });

    return {
      response_action: 'clear',
    };
  })
  .addClosedHandler('step1', handleViewClosed)
  .addClosedHandler('step2', handleViewClosed);

export default Flow;
