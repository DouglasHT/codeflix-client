export default function LoginPage() {
	return (
		<div
			style={{ backgroundImage: "url('/background.jpg')" }}
			className="bg-cover bg-center bg-no-repeat text-white opacity-80"
		>
			<div className="flex min-h-screen flex-col items-center justify-center py-2">
				<form className="flex w-full flex-col space-y-4 bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg">
					<div className="flex flex-col items-center space-y-4">
						<h1 className="text-3xl font-bold">Login</h1>
						<p className="text-sm text-gray-500">
							Don't have an account?
							<a className="text-red-500 hover:underline">Sign up</a>
						</p>
					</div>
					<div className="mt-8 flex flex-col space-y-4">
						<label htmlFor="email" className="block text-sm font-medium">
							Email
						</label>
						<input
							id="email"
							name="email"
							type="email"
							autoComplete="email"
							required
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
						/>
					</div>
				</form>
			</div>
		</div>
	);
}
