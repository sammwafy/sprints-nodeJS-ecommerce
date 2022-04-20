/** @format */

import { Navigate } from "react-router-dom";

const ProtectedAdminRoute = ({ auth, children }) => {
	console.log(auth);
	if (!auth) {
		return <Navigate to='/login' replace />;
	}

	return children;
};

export default ProtectedAdminRoute;
