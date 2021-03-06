/** @format */

import Header from "../Header/header";
import db from "../../db.json";
import Footer from "../Footer/footer";
const Layout = ({ children }) => {
	const data = db;
	return (
		<>
			<Header items={db.NavMenuItems} />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
