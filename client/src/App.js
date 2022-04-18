/** @format */

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/homepage/HomePage";

import AdminPage from "./Componenets/Admin-Dashboard/AdminPage";
import Home from "./Pages/AdminHome/Home";

import New from "./Pages/AdminNew/New";
import AdminLogin from "./Pages/AdminLogin/AdminLogin";
import AdminList from "./Pages/AdminListComp/AdminList";
import Single from "./Pages/AdminSingle/Single";
import AdminEdit from "./Pages/AdminEdit/AdminEdit";
import UnderConstruc from "./Pages/UnderConstruc";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import { userInputs, productInputs } from "./inputs";
import {
	usersColumns,
	productsColumns,
	ordersColumns,
	categoriesColumns,
	brandsColumns,
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
							element={<AdminList columns={usersColumns} type='users' />}
						/>
						<Route path=':userId'>
							<Route index element={<Single />} />
							<Route path='edit' element={<AdminEdit inputs={userInputs} />} />
						</Route>
					</Route>

					<Route path='products'>
						<Route
							index
							element={<AdminList columns={productsColumns} type='products' />}
						/>
						<Route path=':productId'>
							<Route index element={<Single />} />
							<Route path='edit' element={<AdminEdit />} />
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
							<Route path='edit' element={<AdminEdit />} />
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
							<Route path='edit' element={<AdminEdit />} />
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
							<Route path='edit' element={<AdminEdit />} />
						</Route>
					</Route>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
