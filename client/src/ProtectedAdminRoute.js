/** @format */

import { Navigate } from "react-router-dom";

const ProtectedAdminRoute = ({ user, children }) => {
	//dont forget ! in condition
	console.log(user);
	if (!user.isAdmin) {
		return <Navigate to='/' replace />;
	}

	return children;
};

export default ProtectedAdminRoute;
