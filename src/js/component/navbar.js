import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
	const location = useLocation().pathname;
	console.log(location);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Log-In</span>
			</Link>
			<div className="ml-auto" style={{ visibility: location == "/signup" ? "hidden" : "" }}>
				<Link to="/signup">
					<button className="btn btn-primary">Sign-Up</button>
				</Link>
			</div>
		</nav>
	);
};
