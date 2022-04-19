/** @format */

import { Navigate } from "react-router-dom";

const ProtectedAdminRoute = ({ user, children }) => {
	if (user.isAdmin) {
		return <Navigate to='/' replace />;
	}

	return children;
};

export default ProtectedAdminRoute;
