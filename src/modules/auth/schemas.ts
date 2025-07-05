import z from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3, "password must be at least 3 character"),
  username: z
    .string()
    .min(3, "user name must be at least 3 character")
    .max(63, "user name must ne less than 63 character")
    .regex(
      /^[a-z0-9][a-z0-9-]*[a-z0-9]$/,
      "user namr can only contain lower case, numbes and hyphens. It must not end with a letteer or number "
    )
    .refine(
      (val) => !val.includes("--"),
      "Username cannot contain consercutive hyphens"
    )
    .transform((val) => val.toLowerCase()),
});


export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});