// deno-lint-ignore-file no-explicit-any

//## DATA TYPES

export type Constants = {
  templates: Template[];
  general: {
    title: string;
    description: string;
    actionLabel: string;
  };
  slackDeprecated: {
    view1Notice: string;
    view3Notice: string;
  };
  links: {
    qcExpectations: string;
  };
};

export type Template = {
  key: string;
  emojiKey: string;
  titleGroup: string;
  title: string;
  channelTip: string;
  isSlackDeprecated: boolean;
  isEnabled: boolean;
};

export type ViewMetadata = {
  template: Template;
  destConvo: {
    id: string;
    name: string;
  };
};

export type InputValues = {
  [key: string]: InputValue;
};

export type InputValue = {
  action: any;
};

//## FUNCTION TYPES

export type HandleCompose = (props: {
  user: string | undefined;
  template: Template;
  values: InputValues;
  getRealName: (userId: string) => Promise<string>;
}) => Promise<string>;

export type Compose = (props: {
  values: InputValues;
}) => string;

export type ValById = (v: InputValue) => any;

//## BLOCK TYPES

export type Plain = {
  type: string;
  text: string;
};

export type RemarksBlock = (props: {
  id: string;
  label: string;
}) => {
  type: 'input';
  block_id: string;
  label: Plain;
  element: {
    type: 'plain_text_input';
    action_id: 'action';
    placeholder: Plain;
  };
};

export type TemplateOptionBlock = {
  value: string;
  text: {
    type: string;
    text: string;
    emoji: true;
  };
};

export type DroInput = (props: {
  id: string;
  label: string;
  placeholder: string;
  hint: string;
  optional?: boolean;
  multiline?: boolean;
}) => {
  type: 'input';
  block_id: string;
  label: Plain;
  hint: Plain;
  element: {
    type: 'plain_text_input';
    action_id: 'action';
    multiline: boolean;
    placeholder: Plain;
  };
};
