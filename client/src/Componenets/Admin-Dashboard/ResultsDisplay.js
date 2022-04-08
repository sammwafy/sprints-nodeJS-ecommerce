/** @format */

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ResultsDisplay = ({ input, label, badge }) => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		const counter = () => {
			setInterval(() => {
				if (count === input) {
					return;
				} else {
					setCount((count) => (count === input ? input : count + 5));
				}
			}, 0.01);
		};
		counter();
	}, []);

	return (
		<div
			style={{
				display: "flex",
				width: "200px",
				height: "200px",
				flexDirection: "column",

				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "white",
				boxShadow: "3px 3px 30px 3px #FF85B3",
				margin: "10px",
			}}
		>
			<h1>
				{count}
				<span style={{ color: "rgba(25,255,25)" }}>
					{count ? (count > 1 && badge !== "$" ? `${badge}s` : badge) : ""}
				</span>
			</h1>
			<p style={{ color: "#FF85B3", fontWeight: "bold" }}>{label}</p>
		</div>
	);
};

export default ResultsDisplay;
