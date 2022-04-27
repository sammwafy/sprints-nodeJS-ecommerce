const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const Cart = require("../models/Cart");

const router = require("express").Router();

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedProduct = await Cart.findOne({ userId: req.params.id }).then(
      (HasCart) => {
        // let user = HasReViews.reviews.find((r) => r.userId === req.headers.id);
        if (HasCart) {
          return Cart.findOneAndUpdate(
            { _id: HasCart._id },
            { products: req.body.products },
            { new: true }
          );
        } else {
          const newCart = new Cart(req.body);
          newCart.save();
        }
      }
    );
    res.status(200).json("cart updated!");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

 

//GET USER CART
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.id });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL CARTS
router.get("/getAll/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
