<<<<<<< HEAD:models/Product.js
const mongoose = require("mongoose")
const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
}, { timestamps: true })
module.exports = mongoose.model("Product", ProductSchema)
=======
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
		size: { type: String },
		color: { type: String },
		price: { type: Number, required: true },
		quantity: { type: Number, required: true },
    reviews: [
			{
				userId: String,
        rating: Number,
        comment: String
			},
		],
	},
	{ timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
>>>>>>> 643f79d3963dca8413de8660110c63f182b09107:Server/models/Product.js
