import React from "react";
import "../../styles/signup.scss";
import { Link } from "react-router-dom";

export const Login = () => {
	return (
		<div className="d-flex justify-content-center mt-5">
			<form className="border" style={{ width: "25rem", padding: "80px" }}>
				<div className="login-img">
					<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres-2.cloudinary.com%2Fcrunchbase-production%2Fimage%2Fupload%2Fc_lpad%2Ch_256%2Cw_256%2Cf_auto%2Cq_auto%3Aeco%2Fszm6imihccmdultzyzl2&f=1&nofb=1" />
				</div>
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
