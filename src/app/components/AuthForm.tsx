"use client";

import React from "react";
import { InputField } from "./InputField";

type AuthFormProps = {
	formType: "login" | "register";
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
export const AuthForm: React.FC<AuthFormProps> = ({ formType, onSubmit }) => {
	return (
		<form
			className="flex w-full max-w-md flex-col rounded space-y-4 bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg"
			onSubmit={onSubmit}
		>
			<div className="flex flex-col items-center space-y-4">
				<h1 className="text-3xl font-bold">{formType === "login" ? "Login" : "Register"}</h1>
				<p className="text-sm text-gray-500">
					{formType === "login" ? "New to the app?" : "Already have an account?"}
					<a className="text-red-500 hover:underline" href={formType === "login" ? "/auth/register" : "/auth/login"}>
						{" "}
						{formType === "login" ? "Sign up" : "Login"}
					</a>
				</p>
			</div>
			<div className="mt-8 flex flex-col space-y-4">
				<InputField id="email" label="Email" type="email" placeholder="Enter your email" />
				<InputField id="password" label="Password" type="password" placeholder="Enter your password" />
				{formType === "register" && (
					<InputField
						id="confirmPassword"
						label="Confirm Password"
						type="password"
						placeholder="Confirm your password"
					/>
				)}
			</div>
			<div className="flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0">
				<button
					className="flex w-full items-center justify-center rounded-lg bg-red-500 hover:bg-red-600 px-4 py-2 text-sm semi-bold text-white sm:w-auto sm:px-8"
					type="submit"
				>
					{formType === "login" ? "Login" : "Register"}
				</button>
			</div>
		</form>
	);
};
