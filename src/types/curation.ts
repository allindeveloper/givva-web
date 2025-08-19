import { z } from "zod";

export const CreateCurationFormSchema = z.object({
  name: z.string().nonempty({
    error: "Name is required",
  }),
  ageRange: z.string().nonempty({
    error: "Age Range is required",
  }),
  relationship: z.string().nonempty({
    error: "Relationship is required",
  }),
  interests: z.string().nonempty({
    error: "Interest is required",
  }),
  occassion: z.string().nonempty({
    error: "Occassion is required",
  }),
  note: z.string().nonempty({
    error: "Note is required",
  }),
});

export type CreateCurationFormType = {
  id?: string;
  giftTypes?: string[];
} & z.infer<typeof CreateCurationFormSchema>;
