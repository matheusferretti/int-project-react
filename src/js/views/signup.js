import React from "react";
import "../../styles/signup.scss";

// add some useStates that have some objects with name, username, email, etc and create a submit button with a function where the function gets triggered and those values get sent to the back-end

export const SignUp = () => {
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
					<label htmlFor="examplefirstName">Name</label>
					<input type="text" className="form-control" id="examplefirstName" placeholder="Enter Name" />
				</div>
				<div className="form-group">
					<label htmlFor="examplelastName">Email address</label>
					<input type="text" className="form-control" id="examplelastName" placeholder="Enter email" />
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>
				<div className="d-flex justify-content-center">
					<button type="button" className="btn btn-primary">
						<label htmlFor="image">Upload Picture</label>
					</button>
				</div>
				<div className="d-flex justify-content-center mt-3">
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};
