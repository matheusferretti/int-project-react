import React from "react";
import "../../styles/signup.scss";
import { Link } from "react-router-dom";

export const Login = () => {
	return (
		<div className="d-flex justify-content-center mt-5">
			<form className="border" style={{ width: "25rem", padding: "80px" }}>
				<div className="form-group">
					<label htmlFor="examplefirstName">Username</label>
					<input type="text" className="form-control" id="exampleuserName" placeholder="Enter Username" />
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>
				<div>
					If you are not yet registered, <Link to="/signup">sign-up here</Link>{" "}
				</div>
				<div className="d-flex justify-content-center">
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};
