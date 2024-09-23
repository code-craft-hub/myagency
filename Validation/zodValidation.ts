import { z } from "zod";
export const contactValidation = z.object({
    fullName: z.string().min(2, {
      message: "FullName must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Enter a valid email address",
    }),
    subject: z.string().min(2, {
      message: "Subject must be at least 2 characters.",
    }),
    message: z.string().min(5, {
      message: "Message content must be at least 5 characters.",
    }),
  });