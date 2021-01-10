import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
	const { store } = useContext(Context);
	return (
		<Route
			{...rest}
			render={routeProps => (store.signedIn ? <RouteComponent {...routeProps} /> : <Redirect to={"/login"} />)}
		/>
	);
};
