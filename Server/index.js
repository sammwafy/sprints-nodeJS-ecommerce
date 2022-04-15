/** @format */

const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserRoute = require("./routes/user");
const authRoute = require("./routes/authentication");
const ProductRoute = require("./routes/product");
const CartRoute = require("./routes/cart");
const OrderRoute = require("./routes/order");

dotenv.config();
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		console.log("DB Connected successfuly");
	})
	.catch((err) => {
		console.log(err);
	});
app.use(express.json());
app.use(cors());
app.use("/api/users", UserRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", ProductRoute);
app.use("/api/carts", CartRoute);
app.use("/api/orders", OrderRoute);
app.listen(5009, () => {
	console.log("server is running 5009");
});
