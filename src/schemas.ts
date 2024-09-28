import { z } from "zod";
import { TranslateFn } from "./types";

const USERNAME_MAX = 50;
const USERNAME_MIN = 2;

const PASSWORD_MAX = 50;
const PASSWORD_MIN = 2;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loginFormSchemaGenerator = (t: TranslateFn<"Schemas.LoginForm">) =>
  z.object({
    username: z
      .string({
        required_error: t("username-required"),
        invalid_type_error: t("username-type"),
      })
      .min(USERNAME_MIN, {
        message: t("username-min", { min: USERNAME_MIN }),
      })
      .max(USERNAME_MAX, {
        message: t("username-max", { max: USERNAME_MAX }),
      }),
    password: z
      .string({
        required_error: t("password-required"),
        invalid_type_error: t("password-type"),
      })
      .min(PASSWORD_MIN, {
        message: t("password-min", { min: PASSWORD_MIN }),
      })
      .max(PASSWORD_MAX, {
        message: t("password-max", { max: PASSWORD_MAX }),
      }),
  });
