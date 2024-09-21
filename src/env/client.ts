import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_ROOT_URL: z.string().url(),
    NEXT_PUBLIC_MODE: z.enum(["production", "development", "test"]),
  },
  runtimeEnv: {
    NEXT_PUBLIC_ROOT_URL: process.env.NEXT_PUBLIC_ROOT_URL,
    NEXT_PUBLIC_MODE: process.env.NEXT_PUBLIC_MODE,
  },
});
