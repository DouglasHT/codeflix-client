import { z } from "zod";

export const loginFormSchema = z
	.object({
		email: z.string().email({ message: "Invalid email address" }).min(1, { message: "Email is required" }),
		password: z.string().min(8, { message: "Password must be at least 8 characters" }),
		// .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
		// 	message:
		// 		"Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
		// }),
	})
	.required();
