import { z } from "zod";

export const liveSessionSchema = z.object({
  sessionTitle: z
    .string()
    .min(1, "Session Title is required")
    .min(5, "Session Title must be at least 5 characters")
    .max(100, "Session Title must be less than 100 characters"),

  educationalStage: z.string().min(1, "Stage is required"),

  course: z.string().min(1, "Course is required"),

  date: z.string().min(1, "Date is required"),

  startTime: z.string().min(1, "Start time is required"),

  duration: z.string().default("60 min"),

  description: z
    .string()
    .max(500, "Description must be less than 500 characters")
    .optional(),

  notifyStudents: z.boolean().default(true),
});

export const liveSessionDefaultValues = {
  sessionTitle: "",
  educationalStage: "",
  course: "",
  date: "",
  startTime: "",
  duration: "60 min",
  description: "",
  notifyStudents: true,
};
