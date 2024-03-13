export const Home = () => {

	// get the location log from user data from dbor any api 
	const data = [
		{ Date: "12-03-2024", Time: '11:48 AM',Location: "abc road, kd city,xy ,countryXy" },
		{ Date: "22-02-2024", Time: '2:48 PM',Location: "Feabc road, kd city,xy ,countryPq" },
		{ Date: "02-01-2024", Time: '12:48 AM',Location: "Jabc road, kd city,xy ,countryTH" },
	]
	return <main>
		{/* <div className="text-center">Home</div> */}
		<div className="border-b-2 flex justify-between items-center">
			<div className="logo ml-5">LogoHere</div>
			<div className="flex p-2">
				<div className="profile mr-5 opacity-80 ">
					{/* Get username and email when login/signup  */}
					<p className="">username    </p>
					<p className="">email@ex.com</p>
				</div>
				<button className="p-3 mx-3 bg-blue-400 rounded-2xl ">Logout</button>
			</div>
		</div>
		<section className="flex justify-center  item-center p-8">
			{/* map */}
			<div className="bg-indigo-300 h-[10rem] w-[14rem] md:h-[26rem] md:w-[36rem] lg:h-[26rem] lg:w-[60rem] text-ceter"></div>
		</section>
		{/* <button><a href="locationlog">view locaton log</a></button> */}
		<section className="p-1 m-4">
			{/* locaion log */}
			{/* date,time,location, */}
			<div className="flex justify-center  item-center">
				<table className="">
					<tr>
						<th className="p-5 m-4 bg-blue-800">Date</th>
						<th className="p-5 m-4 bg-blue-800">Time</th>
						<th className="p-5 m-4 bg-blue-800">Location</th>
						{/* <th className="p-5 m-4 bg-blue-800">view on map</th> */}
					</tr>

					{data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td className="p-5 m-4 bg-blue-400">{val.Date}</td>
                            <td className="p-5 m-4 bg-blue-400">{val.Time}</td>
                            <td className="p-5 m-4 bg-blue-400">{val.Location}</td>
                        </tr>
                    )
                })}
					
				</table>
			</div>
		</section>
		
	</main>;
};
