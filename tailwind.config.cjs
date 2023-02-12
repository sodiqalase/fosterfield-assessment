/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{tsx,ts,jsx,js}"],
	theme: {
		extend: {
			colors: {
				fs: {
					"deep-black": "#000000",
					"light-gray": "#83879B",
					"light-black": "#2C2C2C",
					"primary-blue": "#1F28EB",
					"input-gray": "#E7E7E7",
				},
			},
		},
		plugins: [],
	},
};
