/** @format */

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const Product = require("../models/Product");
const router = require("express").Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

// handle file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Imgs");
  },
  filename: function (req, file, cb) {
    const newName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, uuidv4() + "-" + newName);
  },
});

// check upload extension

const upload = multer({
  storage: storage,
  limits: { fieldNameSize: 300, fileSize: 4194304 },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

//CREATE
router.post(
  "/",
  verifyTokenAndAdmin,
  upload.array("productImg", 6),
  async (req, res) => {
    const url = req.protocol + "://" + req.get("host");
    const imgArray = req.files.map((file) => url + "/Imgs/" + file.filename);
    const data = {
      ...req.body,
      image: imgArray,
    };
    const newProduct = new Product(data);
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);
//UPDATE
router.put(
  "/:id",
  verifyTokenAndAdmin,
  upload.array("productImg", 6),
  async (req, res) => {
    const url = req.protocol + "://" + req.get("host");
    const imgArray = req.files.map((file) => url + "/Imgs/" + file.filename);
    const data = {
      ...req.body,
      image: imgArray,
    };
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: data,
        },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
);
// Review
router.put("/review/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: req.params.id },
      {
        reviews: req.body,
      }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    return res.status(500).json(err);
  }
});
//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("product has been deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
});
//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;
    if (qNew) {
      products = await Product.find.sort({ createdAT: -1 }).limit(5);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (err) {
    return res.status(500).json(err);
  }
});
module.exports = router;
