import z from "zod";

const UsernameSchema = z.object({ username: z.string() });

const UserHeaderShcema = z.object({ authorization: z.string() });

const FetchSessionParamSchema = z.object({ username: z.string(), sessionId: z.string() });

export const ConfirmBookingSchema = z.object({ username: z.string(), sessionData: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    amount: z.number(),
    timeslot: z.number(),
    meetlink: z.string(),
    booked_slot: z.string(),
    date: z.string()
}) });

export type UsernameType = z.infer<typeof UsernameSchema>;
export type FetchUserHeaderType = z.infer<typeof UserHeaderShcema>;
export type FetchSessionParamType = z.infer<typeof FetchSessionParamSchema>;