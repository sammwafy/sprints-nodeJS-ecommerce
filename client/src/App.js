/** @format */

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/homepage/HomePage";
import AdminPage from "./Componenets/Admin-Dashboard/AdminPage";
import Home from "./Pages/AdminHome/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/admin/*' element={<AdminPage />} />
				<Route path='/*' element={<HomePage />} />

				{/* <Route path='/admin' element={<Home />}>
					<Route index element={<Home />} />
					<Route path='/users' elements={<Home />} />
				</Route> */}
			</Routes>
		</Router>
	);
}

export default App;
