/** @format */

const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		featuredImg: { type: Number },
		image: [
			{
				type: String,
				required: true,
			},
		],
		categories: { type: Array },
		Brand: { type: String },
		size: { type: String },
		color: { type: String },
		price: { type: Number, required: true },
		quantity: { type: Number, required: true },
		reviews: [
			{
				username: String,
				userId: String,
				rating: Number,
				comment: String,
			},
		],
	},
	{ timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
