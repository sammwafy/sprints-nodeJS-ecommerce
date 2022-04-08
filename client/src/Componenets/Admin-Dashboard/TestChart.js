/** @format */

import React from "react";
// import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
import ResultsDisplay from "./ResultsDisplay";

const TestChart = () => {
	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend
	);

	const options = {
		maintainAspectRatio: false,
		responsive: true,
		redraw: true,
		layout: {
			padding: 20,
		},
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Sales Monthly",
			},
		},
	};
	const pieOptions = {
		maintainAspectRatio: false,
		responsive: true,
		layout: {
			padding: 20,
		},
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Categories",
			},
		},
	};

	const labels = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
	];

	const data = {
		labels,
		datasets: [
			{
				label: "outdoors",
				data: [4, 5, 6],
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
			{
				label: "indoors",
				data: [10, 4, 20],
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
			{
				label: "kitchen",
				data: [10, 4, 20],
				backgroundColor: "rgba(53, 162, 23, 0.5)",
			},
		],
	};

	ChartJS.register(ArcElement, Tooltip, Legend);

	const dataPie = {
		labels: [
			"Outdoors",
			"Indoors",
			"Lighting",
			"Sofa",
			"Kitchen",
			"Livingroom",
		],
		datasets: [
			{
				label: "# of Votes",
				data: [12, 19, 16, 30, 2, 3],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
		],
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<div
				style={{
					display: "flex",
				}}
			>
				<ResultsDisplay input={15000} label={"Todays views"} badge={"view"} />
				<ResultsDisplay input={1500} label={"Total income Today"} badge={"$"} />
				<ResultsDisplay input={1500} label={"Total income Today"} badge={"$"} />
				<ResultsDisplay input={1500} label={"Total income Today"} badge={"$"} />
			</div>
			<div style={{ display: "flex" }}>
				<div
					style={{
						width: "400px",
						height: "300px",
						margin: "10px",
						boxShadow: "3px 3px 30px 3px #FF85B3",
					}}
				>
					<Pie data={dataPie} options={pieOptions} />
				</div>

				<div
					style={{
						width: "500px",
						height: "300px",
						display: "flex",
						boxShadow: "3px 3px 30px 3px #FF85B3",
						margin: "10px",
					}}
				>
					<Bar options={options} data={data} />
				</div>
			</div>
		</div>
	);
};

export default TestChart;
