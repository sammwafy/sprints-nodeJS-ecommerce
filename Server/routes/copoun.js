const Copoun = require("../models/Copoun");
const {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();

module.exports = router;
