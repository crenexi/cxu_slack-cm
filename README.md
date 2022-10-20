# Slack — Compose Message

Slack app named **Ops Composer** to generate useful messages in Crafty (Bay Area).

This app utilizes the [Slack API](https://api.slack.com/), and is built as a **Run-on-Slack** app for quick deployment. This Slack platform is beta, and emphasizes simple URL shortcuts to trigger the app. [Learn More](https://api.slack.com/future/intro).

## TypeScript

This app is built with TypeScript, as setup and guided by the Slack API docs. In simple terms: it defines a workflow that runs a function; that function opens a modal that routes through a couple views. Use of types and constants assisted in making more robust code.

## Permissions

The Slack bot scopes in `manifest.ts` include only a few basic permissions to enable reading and writing to channels and im. We use the Slack API in only two cases:

1. Use of `client.conversations.info` to get the channel name for display purposes
2. Use of `client.conversations.open` to message the user (for DRO and Order)

## Templates

These message templates are provided for:

- Ops — Request Task Update
- Ops — Add Task Reference Photo
- Ops — Request Signage/Labels
- Ops — Flag Equipment Issue
- Flex — Request Task Bulk Update
- Flex — Send QC Starting
- Flex — Send QC Remarks
- Flex — Send Trainee Recap
- CAF — DRO Assistant*
- CAF — Order Assistant*

\* _Crafty Activity Feed use only._

An `isEnabled` field exists on the templates to easily disable one if needed.

# Setup

## Using the CLI

1. Install the CLI ([here](https://api.slack.com/future/tools/cli))
2. Authorize the CLI in the workspace (`slack login` and follow instructions)

## Trigger for deployed app

See list of installed triggers

`slack trigger list`

Create a trigger

`slack trigger create --trigger-def "./triggers/cm_trigger.ts"`

Allow workspace members to use this trigger

`slack trigger access --trigger-id {ID} --grant --everyone`

## Trigger for local dev app

Same as above but select **Ops Composer (dev)** app when prompted

# Deployment

## Enable Beta

The workspace admin needs to accept the beta TOS. **Settings & Permissions**, down to **Slack Platform Beta**. Agree to terms and allow either admins or specific users to create Run-on-Slack apps.

## Admin Approval

Deploying the app. Simply use `slack run` to install it. The terminal will prompt to send a request to the admin to allow installing the app.

> If a workspace has Admin Approved Apps (AAA) enabled, apps will need to be approved by an administrator (as set in your workspace settings) before it can be deployed.

> Workspace owners and administrators cannot run `slack deploy` to deploy apps when a workspace has admin-approved apps turned on, but an app running locally with slack run can be installed in a workspace with Admin Approved Apps enabled.

> When a developer deploys an app, administrators will receive a notification, either from Slackbot or using the Admin Approved Apps API workflow, as determined by your organization. The approval notification will include which OAuth scopes the app is requesting as well as any outgoing domains an app may want to access.

See more [here](https://api.slack.com/future/admin) and [here](https://slack.com/help/articles/222386767-Manage-app-approval-for-your-workspace#member-app-requests).

# Structure

The folder structure goes as follows.

## Manifest & Triggers

- `manifest.ts`: The definition of the Slack app

- `/triggers`: Used to create triggers (URL shortcuts)

## The Workflow

- `/workflows`: In this project there is one workflow. The workflow has two steps: (1) run the function which handles the modal logic, then (2) send the message to the designated channel.
- `/functions`:
  - `flow_function.ts`: see **The Flow Function** below
  - `handle-compose.ts`: After the last modal view is complete, the user input is sent to this function to generate the expected message to send.
- `/views`: defines the modal views and which blocks are included
- `/blocks`: the block components (ex. input plain text block). There are blocks for each template, crafted for the specific inputs needed.

## Misc Folders

- `/constants`: Some general text used, and the **templates** definition
- `/helpers`: Some helper functions used
- `/types`: Some common types used

# The Flow Function

- **Inputs**: uses the **current user** and **current channel** (where this workflow is triggered)
- **Outputs**: expects a **message** and **destConvoId** (channel to send to) outputs.
- Handles three modal views, named **step1**, **step2**, and **step3**

This is what the workflow runs. It's the router for the modal, that handles three consecutive modal views:

1. Select a template
2. Select a channel*
3. Enter inputs for selected template.

\* _Skipped for DRO and Order templates; in those cases, the message is sent as a DM from the app. These are intended for copy-paste use only for the Activity Feed. This is provided as a disclaimer in Step 1._

# Misc

## Contributions

App built by James Walrath | <james.walrath@craftydelivers.com>

## Region

For the Bay Area region only. Some of the templates tag **@ba-fieldops** by default. If there was any interest in making them usable by other regions, I can work on that (would require a region selection and tag).

## Bug Fixes

If bugs arise, I'd be happy to collect any issues, do a bulk fix, and redeploy.
