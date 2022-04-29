/** @format */

import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

import React, { useEffect, useState } from "react";
import axios from "../../../Hooks/axios.js";

const Rating = ({ id }) => {
	const [review, setReview] = useState(0);

	useEffect(() => {
		const getReview = async () => {
			try {
				const res = await axios.post(`/api/products/average/${id}`);

				setReview(res?.data[0]?.average);
			} catch (err) {
				console.log(err);
			}
		};
		getReview();
	}, [id]);

	return <Rater total={5} rating={review || 1} interactive={false} />;
};

export default Rating;
