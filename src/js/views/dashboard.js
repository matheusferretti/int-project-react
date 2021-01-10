import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Dashboard = () => {
	const { store } = useContext(Context);
	console.log(store.signedIn);
	return (
		<div className="card">
			<div className="card-body">name: {store.user.name}</div>
			<div className="card-body">email: {store.user.email}</div>
			<div className="card-body">username: {store.user.username}</div>
		</div>
	);
};
