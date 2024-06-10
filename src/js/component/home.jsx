import React from "react";

//include images into your bundle

import SecondCounter from "./SecondCounter";
//create your first component
const Home = () => {
	return (
		<div className="row justify-content-center mt-4 bg-dark">
			<div className="col-10">
				<div className="d-flex justify-content-center text-center align-items-center">
					<div>
					<SecondCounter/>
					</div>
				</div>			
			</div>
		</div>
	);
};

export default Home;
