/** @format */

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/homepage/HomePage";
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
} from "./export data/DataTableFields";

//shop
import Shop from "./Pages/shop/Shop";

// login and logout
import Login from "./Pages/Login/Login";
import Logout from "./Pages/Logout/Logout";

// protected routes
import ProtectedRoute from "./ProtectedRoute";
import ProtectedAdminRoute from "./ProtectedAdminRoute";

// import authcontext
import useAuth from "./Hooks/useAuth.js";
import ErrorPage from "./Pages/404/404.js";
import CartPage from "./Pages/cart/CartPage";
import Register from "./Pages/Register/Register.js";
import SingleProduct from "./Componenets/ProductView/SingleProduct.js";
import CouponPage from "./Pages/coupon/CouponPage";
import OrderHistory from "./Componenets/Checkout/OrderHistory";
import OrderDetails from "./Componenets/Checkout/OrderDetails";
import CheckOut from "./Pages/checkout/CheckOut";
import UserList from "./Pages/Admin/users/usersList/UserList";
import UsersProfile from "./Pages/Admin/users/userProfiles/UsersProfile";
import ProductsList from "./Pages/Admin/products/productsList/ProductsList";

import { loadStripe } from "@stripe/stripe-js";
import ProductEdit from "./Pages/Admin/products/ProductEdit/ProductEdit";
import NewProduct from "./Pages/Admin/products/newProduct/NewProduct";
import Profile from "./Componenets/Profile/Profile.js";
import UserProfilePage from "./Pages/Profile/userProfilePage.js";

function App() {
  const { auth } = useAuth();
  // const [user, setUser] = useState({});
  // const [cookies, setCookie] = useCookies(["token", "id"]);
  // useEffect(() => {
  // 	const userID = cookies.id;
  // 	const config = {
  // 		headers: {
  // 			token: "Bearer" + cookies.token,
  // 		},
  // 	};

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/404" element={<ErrorPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="order">
          <Route index element={<OrderHistory />} />
          <Route path=":id" element={<OrderDetails />} />
        </Route>

        {/* user access only */}

        <Route element={<ProtectedRoute />}>
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<UserProfilePage />} />
        </Route>

        <Route path="shop">
          <Route index element={<Shop />} />
          <Route path=":id" element={<SingleProduct />}></Route>
        </Route>

        <Route element={<ProtectedAdminRoute role="SuperUser" />}>
          <Route path="admin">
            <Route index element={<Home />} />
            <Route path="underConstruc" element={<UnderConstruc />} />
            <Route path="coupons" element={<CouponPage />} />

            <Route path="users">
              <Route index element={<UserList />} />
              <Route path=":id" element={<UsersProfile />} />
            </Route>

            <Route path="products">
              <Route index element={<ProductsList />} />

              <Route path=":id">
                <Route index element={<Single type="products" />} />
                <Route path="edit" element={<ProductEdit />} />
              </Route>
              <Route path="new" element={<NewProduct />} />
            </Route>

            <Route path="categories">
              <Route
                index
                element={
                  <AdminList columns={categoriesColumns} type="categories" />
                }
              />
              <Route path=":id">
                <Route index element={<Single type="categories" />} />
                <Route path="edit" element={<AdminEdit type="categories" />} />
              </Route>
              <Route
                path="new"
                element={<New type="categories" title="Add new Category" />}
              />
            </Route>

            <Route path="brands">
              <Route
                index
                element={<AdminList columns={brandsColumns} type="brands" />}
              />
              <Route path=":id">
                <Route index element={<Single type="brands" />} />
                <Route path="edit" element={<AdminEdit type="brands" />} />
              </Route>
              <Route
                path="new"
                element={<New type="brands" title="Add new Brand" />}
              />
            </Route>

            <Route path="orders">
              <Route
                index
                element={<AdminList columns={ordersColumns} type="orders" />}
              />
              <Route path=":id">
                <Route index element={<Single type="orders" />} />
                <Route path="edit" element={<AdminEdit type="orders" />} />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
