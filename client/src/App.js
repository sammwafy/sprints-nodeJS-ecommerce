/** @format */

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/homepage/HomePage";

import AdminPage from "./Componenets/Admin-Dashboard/AdminPage";
import Home from "./Pages/AdminHome/Home";

import New from "./Pages/AdminNew/New";
import AdminLogin from "./Pages/AdminLogin/AdminLogin";
import AdminList from "./Pages/AdminListComp/AdminList";
import Single from "./Pages/AdminSingle/Single";
import UnderConstruc from "./Pages/UnderConstruc";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import { userInputs, productInputs } from "./inputs";
import {
	usersColumns,
	productsColumns,
	usersRows,
	productsRows,
	ordersColumns,
	ordersRows,
} from "./dummy data/user";

function App() {
	return (
		<Router>
			<Routes>
				{/* <Route path='/admin/*' element={<AdminPage />} /> */}

				<Route path='/' element={<HomePage />} />

				<Route path='admin'>
					<Route index element={<Home />} />
					<Route path='login' element={<AdminLogin />} />
					<Route path='underConstruc' element={<UnderConstruc />} />

					<Route path='users'>
						<Route
							index
							element={
								<AdminList
									columns={usersColumns}
									rows={usersRows}
									type='users'
								/>
							}
						/>
						<Route path=':userId' element={<Single />} />
						<Route
							path='new'
							element={<New title='Add new User' inputs={userInputs} />}
						/>
					</Route>

					<Route path='products'>
						<Route
							index
							element={
								<AdminList
									columns={productsColumns}
									rows={productsRows}
									type='products'
								/>
							}
						/>
						<Route path=':productId' element={<Single />} />
						<Route
							path='new'
							element={<New inputs={productInputs} title='Add new Product' />}
						/>
					</Route>
					<Route path='orders'>
						<Route
							index
							element={<AdminList columns={ordersColumns} rows={ordersRows} />}
						/>
						<Route path=':userId' element={<Single />} />
						<Route
							path='new'
							element={<New title='Add new User' inputs={userInputs} />}
						/>
					</Route>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
