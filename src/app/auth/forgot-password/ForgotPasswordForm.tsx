"use client";

import { InputField } from "app/components/InputField";

export function ForgotPasswordForm() {
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		alert("submitted forgot password form");
		e.preventDefault();
	};
	return (
		<form
			className="flex w-full max-w-md flex-col rounded space-y-4 bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg"
			onSubmit={onSubmit}
		>
			<div className="flex flex-col items-center space-y-4">
				<h1 className="text-3xl font-bold">Forgot Password</h1>
				<p className="text-sm text-gray-500">Enter your email and we will send you a link to reset your password</p>
			</div>

			<InputField id="email" label="Email" type="email" placeholder="Enter your email" />

			<div className="flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0">
				<button
					className="flex w-full items-center justify-center rounded-lg bg-red-500 hover:bg-red-600 px-4 py-2 text-sm semi-bold text-white sm:w-auto sm:px-8"
					type="submit"
				>
					Reset Password
				</button>
			</div>
		</form>
	);
}
