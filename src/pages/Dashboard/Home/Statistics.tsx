import React from "react";
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

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);
const _label = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

const options = {
	barThickness: 61,
	scales: {
		x: {
			beginAtZero: true,
			grid: {
				display: false,
			},
			ticks: {
				font: {
					family: '"Urbanist", sans-serif',
					size: "12px",
				},
			},
		},
		y: {
			beginAtZero: true,
			grid: {
				color: "#F4F7FA",
			},
			ticks: {
				callback: function (value: any) {
					return Number(value).toLocaleString("en-NG", {
						compactDisplay: "short",
						notation: "compact",
					});
				},
				font: {
					family: '"Urbanist", sans-serif',
					size: "12px",
				},
			},
		},
	},
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
			display: false,
		},
		title: {
			display: false,
			text: "Chart.js Bar Chart",
		},
	},
};

const data = [
	2000, 3000, 5000, 3500, 7000, 9000, 3000, 2000, 8500, 6000, 1000, 4500,
];

const Statistics = () => {
	const barData = {
		labels: _label,
		datasets: [
			{
				label: "",
				data: data,
				backgroundColor: "#F5F7F9",
			},
		],
	};
	return (
		<section className="p-8 mt-4 rounded-[6px] bg-white shadow ">
			<div className="flex justify-between items-center">
				<h5 className="text-[14px] font-semibold">Statistics</h5>
			</div>

			<div className="mt-[50px] w-full">
				<Bar options={options as any} data={barData} />
			</div>
		</section>
	);
};

export default Statistics;
