/** @format */

import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import useAuth from "./Hooks/useAuth.js";
import axios from "./Hooks/axios.js";

// role based authorization
// pass the role you want to authorize

const ProtectedAdminRoute = () => {
	const location = useLocation();
	const [iSadmin, setISadmin] = useState(false);
	const { auth } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		const config = {
			headers: {
				token: `Bearer ${auth?.token}`,
			},
		};

		axios.get(`/api/users/admin/${auth?.id}`, config).then(
			(res) => {
				if (res.data) {
					setISadmin(res.data);
				}
			},
			(err) => {
				navigate("/404", { state: { from: location, unauthorized: true } });
			}
		);
	}, []);

	return !auth.username ? (
		<Navigate to='/login' state={{ from: location }} replace />
	) : (
		iSadmin && <Outlet />
	);
};

export default ProtectedAdminRoute;
