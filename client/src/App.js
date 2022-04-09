/** @format */

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/homepage/HomePage";
import AdminPage from "./Componenets/Admin-Dashboard/AdminPage";
import Home from "./Pages/AdminHome/Home";
import New from "./Pages/AdminNew/New";
import AdminLogin from "./Pages/AdminLogin/AdminLogin";
import AdminList from "./Pages/AdminListComp/AdminList";
import Single from "./Pages/AdminSingle/Single";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/admin/*' element={<AdminPage />} />

				<Route path='/'>
					<Route index element={<Home />} />
					<Route path='login' element={<AdminLogin />} />
					<Route path='users'>
						<Route index element={<AdminList />} />
						<Route path=':userId' element={<Single />} />
						<Route path='new' element={<New />} />
					</Route>
					<Route path='products'>
						<Route index element={<AdminList />} />
						<Route path=':productId' element={<Single />} />
						<Route path='new' element={<New />} />
					</Route>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
