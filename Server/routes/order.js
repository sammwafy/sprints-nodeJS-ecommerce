/** @format */

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const Order = require("../models/Order");
const router = require("express").Router();
//CREATE
router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});
//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("order has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET USER ORDERS
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await Order.find({ _id: req.params.id });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET ALL ORDERS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET ORDER STATUS NUMBERS
router.get("/status", verifyTokenAndAdmin, async (req, res) => {
  try {
    const data = await Order.aggregate([
      {
        $match: {
          status: {
            $in: [
              "pending",
              "in review",
              "in progress",
              "on the way",
              "delivered",
            ],
          },
        },
      },
      {
        $group: {
          _id: "$status",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});
// GET TOTAL NUMBERS OF ORDERS TODAY
router.get("/numbers", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const sameDay = new Date(date.setDate(date.getDate() - 1));
  const dayAfter = new Date(date.setDate(date.getDate() + 1));
  try {
    const data = await Order.aggregate([
      { $match: { createdAt: { $gte: sameDay, $lt: dayAfter } } },
      {
        $group: {
          _id: "number of orders today",
          total: { $sum: 1 }, // return total number of orders in same day
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});
// GET TOTAL INCOME LAST SEVEN DAYS
router.get("/lastsevendays", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const SevenDaysBefore = new Date(date.setDate(date.getDate() - 7));
  try {
    const data = await Order.aggregate([
      { $match: { createdAt: { $gte: SevenDaysBefore } } },
      {
        $group: {
          _id: "total amount last seven days",
          total: { $sum: "$amount" }, //return total income last seven days
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});
// GET USER ORDERS DETAILS
router.get("/details/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await Order.find({ userId: { $eq: req.params.id } }).sort({
      createdAt: -1,
    });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
