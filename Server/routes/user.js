/** @format */

const User = require("../models/User");
const CryptoJS = require("crypto-js");
const {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
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

//UPDATE by Admin
router.put("/admin/:id", verifyTokenAndAdmin, async (req, res) => {
	if (req.body.password) {
		req.body.password = CryptoJS.AES.encrypt(
			req.body.password,
			process.env.PASS_SEC
		).toString();
	}
	try {
		const updatedUser = await User.findOneAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

//UPDATE by user
router.put(
	"/:id",
	verifyTokenAndAuthorization,
	upload.single("productImg"),
	async (req, res) => {
		if (req.body.password) {
			const user = await User.findOne({ _id: req.headers.id });
			if (!user) {
				return res.status(401).json("Worng User Credentials");
			}
			const hashedPassword = CryptoJS.AES.decrypt(
				user.password,
				process.env.PASS_SEC
			);
			const originalPassord = hashedPassword.toString(CryptoJS.enc.Utf8);
			if (req.headers.oldpassword !== originalPassord) {
				return res.status(401).json("Worng Password");
			}

			req.body.password = CryptoJS.AES.encrypt(
				req.body.password,
				process.env.PASS_SEC
			).toString();
		}

		if (req.file) {
			try {
				const newPath = await cloudinary.uploader.upload(req?.file?.path);

				if (newPath) {
					try {
						const updatedUser = await User.findByIdAndUpdate(
							req.params.id,
							{
								$set: { avatar: newPath.secure_url },
							},
							{ new: true }
						);
						res.status(200).json(updatedUser);
					} catch (err) {
						res.status(500).json(err);
					}
				}
			} catch (err) {
				res.status(500).json(err);
			}
		} else {
			try {
				const updatedUser = await User.findByIdAndUpdate(
					req.params.id,
					{
						$set: req.body,
					},
					{ new: true }
				);
				res.status(200).json(updatedUser);
			} catch (err) {
				res.status(500).json(err);
			}
		}
	}
);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json("user has been deleted");
	} catch (err) {
		res.status(500).json(err);
	}
});
//GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		const { password, isAdmin, ...others } = user._doc;
		res.status(200).json(others);
	} catch (err) {
		res.status(500).json(err);
	}
});
//GET USER Info
router.get("/findMyInfo/:id", verifyTokenAndAuthorization, async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		const { password, isAdmin, ...others } = user._doc;
		res.status(200).json(others);
	} catch (err) {
		res.status(500).json(err);
	}
});

//verify Admin

router.get("/admin/:id", verifyTokenAndAdmin, async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		const { isAdmin } = user._doc;
		res.status(200).json(isAdmin);
	} catch (err) {
		res.status(500).json(err);
	}
});

// GET ALL USERS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
	const query = req.query.new;
	try {
		const users = query
			? await User.find().sort({ _id: -1 }).limit(5)
			: await User.find();
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json(err);
	}
});
//GET NUMBER OF USERS REGISTERED LAST 7 DAYS
router.get("/numbers", verifyTokenAndAdmin, async (req, res) => {
	const date = new Date();
	const SevenDaysBefore = new Date(date.setDate(date.getDate() - 7));
	try {
		const data = await User.aggregate([
			{ $match: { createdAt: { $gte: SevenDaysBefore } } },
			//  { $project: { day: { $dayOfMonth: "$createdAt" } } },
			{
				$group: {
					_id: "total numbers of users created today", // returns day users created at
					total: { $sum: 1 }, // return total number of users created
				},
			},
		]);
		res.status(200).json(data);
	} catch (err) {
		res.status(500).json(err);
	}
});
//GET USER STATUS NUMBERS
router.get("/status", verifyTokenAndAdmin, async (req, res) => {
	try {
		const data = await User.aggregate([
			{
				$match: {
					status: {
						$in: ["active", "deactivated", "suspended"],
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
module.exports = router;
