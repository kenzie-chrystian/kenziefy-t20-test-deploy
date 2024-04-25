import { z } from "zod";
import { accountSchema } from "./account.schemas";

const sessionBodyCreateSchema = z.object({
  username: z.string().max(50),
  password: z.string().max(255),
});

const sessionReturnSchema = z.object({
  token: z.string(),
});

// const sessionSchema = accountSchema.pick({
//   username: true,
//   password: true,
// });

export { sessionBodyCreateSchema, sessionReturnSchema };
