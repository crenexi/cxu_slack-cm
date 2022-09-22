import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

const message = {
  type: Schema.types.string,
  description: "Message to be posted",
};

const updatedMsg = {
  type: Schema.types.string,
  description: "Updated message to be posted",
};

/**
 * Functions are reusable building blocks of automation that accept
 * inputs, perform calculations, and provide outputs. Functions can
 * be used independently or as steps in Workflows.
 * https://api.slack.com/future/functions/custom
 */
export const BuildmFnDefinition = DefineFunction({
  callback_id: "buildm_function",
  title: "Buildm function",
  description: "A buildm function",
  source_file: "functions/buildm_function.ts",
  input_parameters: {
    properties: { message },
    required: ["message"],
  },
  output_parameters: {
    properties: { updatedMsg },
    required: ["updatedMsg"],
  },
});

export default SlackFunction(
  BuildmFnDefinition,
  ({ inputs }) => {
    const { message } = inputs;

    const updatedMsg =
      `:wave: You submitted the following message: \n\n>${message}`;

    return { outputs: { updatedMsg } };
  },
);
