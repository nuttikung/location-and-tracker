export const Dashboard = () => {
	return <main>
		<button className="p-1 m-3 bg-blue-700"  ><Link to="/login"  className="p-3">Login</Link></button>
		<button className="p-1 m-3 bg-orange-700"><Link to="/signup" className="p-3">Signup</Link></button>
	</main>;
};
