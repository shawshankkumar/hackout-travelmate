import z from "zod";

const UsernameSchema = z.object({ username: z.string() });

const UserHeaderShcema = z.object({ authorization: z.string() });

const FetchSessionParamSchema = z.object({ username: z.string(), sessionId: z.string() });

export type UsernameType = z.infer<typeof UsernameSchema>;
export type FetchUserHeaderType = z.infer<typeof UserHeaderShcema>;
export type FetchSessionParamType = z.infer<typeof FetchSessionParamSchema>;