import z from "zod";

const AuthTokenSchema = z.object({ token: z.string() });

export type AuthTokenParamType = z.infer<typeof AuthTokenSchema>;