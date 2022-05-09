/** @format */

import React from "react";
import Rating from "./Rating.js";
import AddToCarts from "./AddToCarts.js";
import { FaAngleRight } from "react-icons/fa";
const Description = ({ data }) => {
	const price = data?.price && parseFloat(data?.price).toFixed(2);
	console.log(data?.category);
	return (
		<div className='productDesc'>
			<div className='price'>${price}</div>

			<Rating id={data?.id} />
			<AddToCarts id={data?.id} />

			<p>{data?.description}</p>
			<hr />
			<div>
				<h5>
					<FaAngleRight /> stock :{" "}
					{data?.quantity ? (
						<span class='inStock'>instock</span>
					) : (
						<span class='outStock'>out of stock</span>
					)}
				</h5>
				<h5>
					<FaAngleRight /> categories : {data?.category?.map((c) => c)}
				</h5>
			</div>
		</div>
	);
};

export default Description;
