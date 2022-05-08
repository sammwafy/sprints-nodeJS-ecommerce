const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({ extended:true  }));
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //allow-credentials
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/Imgs', express.static('Imgs'));
app.use(express.static(__dirname + "/../build"));

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserRoute = require("./routes/user");
const authRoute = require("./routes/authentication");
const ProductRoute = require("./routes/product");
const CartRoute = require("./routes/cart");
const OrderRoute = require("./routes/order");
const CopounRoute = require("./routes/copoun")
const StripeRoute = require("./routes/stripe")



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
app.use("/api/copouns",CopounRoute)
app.use("/api/stripe",StripeRoute)


app.listen(5009, () => {
  console.log("server is running");
});
