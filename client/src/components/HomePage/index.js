import React from "react";
// import Login from "../../pages/Login"
// import Signup from "../../pages/Signup"
import Closet from "../../pages/Closet"
import Auth from "../../utils/auth";
import { Link } from 'react-router-dom';

function HomePage() {
	if (Auth.loggedIn()) {
		return (
			<Closet />
		);
	} else {
		return (
			<div style={{
				backgroundImage: "url(/images/nice-closet.jpg)",
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				height: '100vh'
			}}>
				<div className="container justify-content-center">
					<div className="row text-center">
						<div className="homeTitle">Welcome to Chosen Outfit</div> 
					</div>

				</div>
			</div>
		);
	}
};

export default HomePage;