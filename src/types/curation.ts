import { z } from "zod";

export const CreateCurationFormSchema = z.object({
    name: z
        .string()
        .min(5, { message: `Email must be at least ${4} characters long.` })
        .max(200, { message: `Email must be at most ${200} characters long.` }),
    ageRange: z
        .string(),
    relationship: z
        .string(),
    interests: z
        .string(),
    occassion: z
        .string(),
    note: z
        .string(),
});

export type CreateCurationFormType = {
    id?: string
} & z.infer<typeof CreateCurationFormSchema>;

