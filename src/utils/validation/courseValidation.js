import { z } from "zod";

export const courseSchema = z
  .object({
    title: z.string().trim().min(1, "Course title is required"),
    stage: z.string().trim().min(1, "Educational stage is required"),
    subject: z.string().trim().min(1, "Subject is required"),
    description: z.string().trim().min(1, "Course description is required"),
    price: z.coerce.number().min(0, "Price must be 0 or greater").optional(),
    isFree: z.boolean(),
    language: z.string().min(1, "Language is required"),
    studentVisible: z.boolean(),
    coverImage: z.any().nullable(),
  })
  .refine((data) => data.isFree || data.price !== 0, {
    message: "Price is required if the course is not free",
    path: ["price"],
  })
  .refine((data) => data.coverImage !== null, {
    message: "Course cover is required",
    path: ["coverImage"],
  });
