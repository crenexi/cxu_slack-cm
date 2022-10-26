// deno-lint-ignore-file no-explicit-any

//## DATA TYPES

export type Constants = {
  templates: Template[];
  general: {
    title: string;
    description: string;
    actionLabel: string;
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
}) => string;

export type Compose = (props: {
  values: InputValues;
}) => string;

export type ValById = (v: InputValue, options?: {
  default?: string;
}) => any;

export type ValByOption = (props: {
  val: {
    action: {
      selected_options: {
        value: string;
      }[];
    };
  };
  opt: string;
}) => any;

//## BLOCK TYPES

export type Plain = {
  type: 'plain_text';
  text: string;
};

export type OptionBlock = (props: {
  value: string;
  text: string;
}) => SelectOptionBlock;

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

export type RemarksChecklistBlock = (props: {
  id: string;
  label: string;
  options: {
    value: string;
    text: Plain;
  }[];
}) => {
  type: 'input';
  block_id: string;
  label: Plain;
  element: {
    type: 'checkboxes';
    action_id: 'action';
    options: {
      value: string;
      text: Plain;
    }[];
  };
};

export type SelectOptionBlock = {
  value: string;
  text: {
    type: string;
    text: string;
    emoji: true;
  };
};

export type TaskBulkInput = (props: {
  id: string;
  label: string;
}) => {
  type: 'input';
  block_id: string;
  label: {
    type: 'plain_text';
    text: string;
    emoji: true;
  };
  optional: boolean;
  element: {
    type: 'plain_text_input';
    action_id: 'action';
    placeholder: Plain;
    multiline: true;
  };
};
