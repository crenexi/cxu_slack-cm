# Slack — Compose Message

Slack app named **Ops Composer** to generate useful messages for a particular job.

This app utilizes the [Slack API](https://api.slack.com/), and is built as a **Run-on-Slack** app for quick deployment. This Slack platform is beta, and emphasizes simple URL shortcuts to trigger the app. [Learn More](https://api.slack.com/future/intro).

## TypeScript

This app is built with TypeScript, as setup and guided by the Slack API docs. In simple terms: it defines a workflow that runs a function; that function opens a modal that routes through a couple views. Use of types and constants assisted in making more robust code.

## Permissions

The Slack bot scopes in `manifest.ts` include only a few basic permissions to enable reading and writing to channels. We use the Slack API in only one case:

1. Use of `client.conversations.info` to get the channel name for display purposes

## Templates

These message templates are provided for:

- Request Task Update
- Add Task Reference Photo
- Request Signage/Labels
- Flag Equipment Issue
- Send QC Starting
- Send Trainee Recap

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
2. Select a channel
3. Enter inputs for selected template.

# Misc

## Contributions

App built by James Walrath | <james@crenexi.com>

## Bug Fixes

Discontinued. Project is EOL.
