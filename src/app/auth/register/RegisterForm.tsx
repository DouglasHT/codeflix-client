"use client";
import { AuthForm } from "app/components/AuthForm";

export default function RegisterForm() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		alert("submitted register form with email: " + e.currentTarget.email.value);
		e.preventDefault();
	};
	return <AuthForm formType="register" onSubmit={handleSubmit} />;
}
