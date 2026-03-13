import z from "zod"

export const schameSignup = z
  .object({
    email: z.string().email("Please enter a valid email"),
    name: z.string().min(3, "User name is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  })

export const schameLogin = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})
