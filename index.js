const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
	origin: "http://localhost:3000",
	credentials: true, //allow-credentials
	optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
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
app.use("/api/users", UserRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", ProductRoute);
app.use("/api/carts", CartRoute);
app.use("/api/orders", OrderRoute);

app.listen(5000, () => {
	console.log("server is running");
})