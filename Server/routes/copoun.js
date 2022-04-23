const Copoun = require("../models/Copoun");
const {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();
//CREATE
router.post("/", verifyTokenAndAdmin, async (req, res) => {
	const date = new Date(req.body.expiresIn).setHours(2, 0, 0, 0)
	req.body.expiresIn = date
	const newCopoun = new Copoun(req.body);
	try {
		const savedCopoun = await newCopoun.save();
		res.status(200).json(savedCopoun);
	} catch (err) {
		res.status(500).json(err);
	}
}
);
//UPDATE COPOUN
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
	if (req.body.expiresIn) {
		const date = new Date(req.body.expiresIn).setHours(2, 0, 0, 0)
		req.body.expiresIn = date
	}
	try {
		const updatedCopoun = await Copoun.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedCopoun);
	} catch (err) {
		return res.status(500).json(err);
	}
}
);
//DELETE COPOUN
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
	try {
		await Copoun.findByIdAndDelete(req.params.id);
		res.status(200).json("Copoun has been deleted");
	} catch (err) {
		return res.status(500).json(err);
	}
});
//GET COPOUN
router.get("/copoun/:id", verifyTokenAndAdmin, async (req, res) => {
	try {
		const copoun = await Copoun.findById(req.params.id);
		res.status(200).json(copoun);
	} catch (err) {
		res.status(500).json(err);
	}
});
//GET ALL COPOUNS
router.get("/all", verifyTokenAndAdmin, async (req, res) => {
	const query = req.query.new;
	try {
		const copouns = query
			? await Copoun.find().sort({ _id: -1 }).limit(5)
			: await Copoun.find();
		res.status(200).json(copouns);
	} catch (err) {
		res.status(500).json(err);
	}
});
module.exports = router;
