
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
  upload.single("productImg"),
  async (req, res) => {
    const url = req.protocol + "://" + req.get("host");
    const data = {
      ...req.body,
      image: url + /Imgs/ + req.file.filename,
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
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});
//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("product has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
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
    res.status(500).json(err);
  }
});
//SEARCH PRODUCT 
router.post("/search", async (req, res) => {
  const qsearch = req.query.search
  try {
    let products
    if(qsearch){
      products = await Product.find({
        categories: {
          $in: [qsearch],
        },
        title:{
          $in:[qsearch]
        }
      });
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
})
module.exports = router;