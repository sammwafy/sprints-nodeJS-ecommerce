/** @format */

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/homepage/HomePage";
import { useEffect, useState } from "react";
import Home from "./Pages/AdminHome/Home";
import New from "./Pages/AdminNew/New";
import AdminList from "./Pages/AdminListComp/AdminList";
import Single from "./Pages/AdminSingle/Single";
import AdminEdit from "./Pages/AdminEdit/AdminEdit";
import UnderConstruc from "./Pages/UnderConstruc";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import {
	usersColumns,
	productsColumns,
	ordersColumns,
	categoriesColumns,
	brandsColumns,
} from "./dummy data/user";

// login and logout
import Login from "./Pages/Login/Login";
import Logout from "./Pages/Logout/Logout";

// cookies
import { useCookies } from "react-cookie";

// custom axios
import axios from "./Hooks/axios";

// protected routes
import ProtectedRoute from "./ProtectedRoute";
import ProtectedAdminRoute from "./ProtectedAdminRoute";

// import authcontext
import AuthContext from "./context/AuthProvider";
import { useContext } from "react";

function App() {
	const { auth, setAuth } = useContext(AuthContext);
	const [user, setUser] = useState({});
	const [cookies, setCookie] = useCookies(["token", "id"]);
	useEffect(() => {
		const userID = cookies.id;
		const config = {
			headers: {
				token: "Bearer " + cookies.token,
			},
		};

		if (userID) {
			axios.get(`/api/users/find/${userID}`, config).then(
				(res) => {
					console.log(res);
					setUser(res.data.isAdmin);
				},
				(err) => {
					console.log(err);
				}
			);
		} else {
			setAuth(null);
		}
	}, []);

	console.log(auth);
	console.log(user);
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<Login user={user} />} />
				<Route path='/logout' element={<Logout />} />

				<Route path='admin'>
					<Route
						index
						element={
							<ProtectedAdminRoute key={user}>
								<Home />
							</ProtectedAdminRoute>
						}
					/>
					<Route path='underConstruc' element={<UnderConstruc />} />

					<Route path='users'>
						<Route
							index
							element={<AdminList columns={usersColumns} type='users' />}
						/>
						<Route path=':userId'>
							<Route index element={<Single />} />
							<Route path='edit' element={<AdminEdit type='users' />} />
						</Route>
					</Route>

					<Route path='products'>
						<Route
							index
							element={<AdminList columns={productsColumns} type='products' />}
						/>
						<Route path=':productId'>
							<Route index element={<Single />} />
							<Route path='edit' element={<AdminEdit type='products' />} />
						</Route>
						<Route
							path='new'
							element={<New type='products' title='Add new Product' />}
						/>
					</Route>

					<Route path='categories'>
						<Route
							index
							element={
								<AdminList columns={categoriesColumns} type='categories' />
							}
						/>
						<Route path=':categoryId'>
							<Route index element={<Single />} />
							<Route path='edit' element={<AdminEdit type='categories' />} />
						</Route>
						<Route
							path='new'
							element={<New type='categories' title='Add new Category' />}
						/>
					</Route>

					<Route path='brands'>
						<Route
							index
							element={<AdminList columns={brandsColumns} type='brands' />}
						/>
						<Route path=':brandtId'>
							<Route index element={<Single />} />
							<Route path='edit' element={<AdminEdit type='brands' />} />
						</Route>
						<Route
							path='new'
							element={<New type='brands' title='Add new Brand' />}
						/>
					</Route>

					<Route path='orders'>
						<Route
							index
							element={<AdminList columns={ordersColumns} type='orders' />}
						/>
						<Route path=':orderId'>
							<Route index element={<Single />} />
							<Route path='edit' element={<AdminEdit type='orders' />} />
						</Route>
					</Route>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
