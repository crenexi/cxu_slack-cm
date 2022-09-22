import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";
import expiredTemplate from "../templates/expired_template.ts";

const user = { type: Schema.slack.types.user_id };
const name = { type: Schema.types.string };
const quantity = { type: Schema.types.number };
const bbDate = { type: Schema.slack.types.date };
const accountManager = { type: Schema.slack.types.user_id };

const updatedMsg = {
  type: Schema.slack.types.rich_text,
  description: "Updated message to be posted",
};

/**
 * Functions are reusable building blocks of automation that accept
 * inputs, perform calculations, and provide outputs. Functions can
 * be used independently or as steps in Workflows.
 * https://api.slack.com/future/functions/custom
 */
export const BuildmExpiredFn = DefineFunction({
  callback_id: "buildm_expired_function",
  source_file: "functions/buildm_expired_function.ts",
  title: "Build expired message",
  description: "Generates the expired product message",
  input_parameters: {
    properties: { user, name, quantity, bbDate, accountManager },
    required: ["user", "name", "quantity", "bbDate", "accountManager"],
  },
  output_parameters: {
    properties: { updatedMsg },
    required: ["updatedMsg"],
  },
});

export default SlackFunction(
  BuildmExpiredFn,
  ({ inputs }) => {
    const updatedMsg = expiredTemplate({ ...inputs });
    return {
      outputs: {
        updatedMsg,
      },
    };
  },
);
