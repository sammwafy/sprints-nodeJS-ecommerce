/** @format */

import { Navigate } from "react-router-dom";

const ProtectedAdminRoute = ({ key, children }) => {
	console.log(key);
	if (key) {
		return <Navigate to='/login' replace />;
	}
	return children;
};

export default ProtectedAdminRoute;
