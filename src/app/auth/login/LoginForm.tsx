"use client";
import { AuthForm } from "app/components/AuthForm";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

type ServerError = {
	message: string;
};

export default function LoginForm() {
	const router = useRouter();
	const [error, setErrors] = useState<string[]>([]);
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const email = formData.get("email");
		const password = formData.get("password");

		try {
			const response = await fetch("/auth/login/api", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			if (response.ok) {
				router.push("/");
				return;
			}

			const payload: ServerError[] = await response.json();
			setErrors(payload.map((error) => error.message));
		} catch (error) {
			console.log(error);
			setErrors(["Something went wrong. Please try again."]);
		}
	};
	return <AuthForm formType="login" onSubmit={handleSubmit} />;
}
