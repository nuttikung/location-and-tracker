export const Login = () => {
	return (
	<main className="bg-slate-800 text-slate-300 h-screen flex justify-center ">
		
		<div className=" flex flex-col justify-center p-2 ">
			<div className="text-3xl p-2 font-bold">Login</div>
			<div className="m-3">
				<form action="" className="flex flex-col flex-wrap">
					<input type="text" name="username" id="username" placeholder="Username" className="m-1 p-2 text-slate-700 text-xl outline-none font-bold rounded-lg" required/>
					<input type="password" name="password" id="password" placeholder="password" className="m-1 p-2 text-slate-700 text-xl outline-none font-bold rounded-lg" required/>
					<button type="submit" className="bg-slate-500 m-2 p-2 text-xl ">Log in</button>
				</form>
			</div>
			<div className="">
				<div className="p-1 text-slate-500"><a className="hover:text-slate-400 hover:underline " href="">forgot Password?</a></div>
				<div className="p-1 text-slate-500">New here? <a className="hover:text-slate-400 hover:underline " href="/SignUp">Sign Up!</a></div>
			</div>
		</div>
	</main>
	);
};
