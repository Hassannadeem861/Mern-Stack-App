import { z } from "zod";

// Creating an object schema
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at lest of 3 charactors.." })
    .max(20, { message: "Name must be at lest of 20 charactors.." }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(20, { message: "Email must be at lest of 20 charactors.." })
    .max(30, { message: "Email must be at lest of 30 charactors.." }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    // .email({ message: "Invalid email address" })
    .min(6, { message: "Password must be at lest of 6 charactors.." })
    .max(30, { message: "Password must be at lest of 30 charactors.." }),

  phonenumber: z
    .string({ required_error: "PhoneNumber is required" })
    .trim()
    // .email({ message: "Invalid email address" })
    .min(15, { message: "PhoneNumber must be at lest of 15 charactors.." })
    .max(30, { message: "PhoneNumber must be at lest of 30 charactors.." }),
});

export default signupSchema;
