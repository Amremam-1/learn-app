import { z } from "zod"

export const quizSchema = z.object({
  title: z.string().min(3, "Quiz title must be at least 3 characters"),

  course: z.string().min(1, "Please select a course"),

  topic: z.string().min(3, "Quiz topic must be at least 3 characters"),

  questions: z.coerce
    .string("Filed is required")
    .min(1, "Minimum 1 question")
    .max(50, "Maximum 50 questions"),
})
