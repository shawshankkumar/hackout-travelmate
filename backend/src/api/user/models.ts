import z from "zod";

const UsernameSchema = z.object({ username: z.string() });

const UserHeaderType = z.object({ authorization: z.string() });

export type UsernameType = z.infer<typeof UsernameSchema>;
export type FetchUserHeaderType = z.infer<typeof UserHeaderType>;