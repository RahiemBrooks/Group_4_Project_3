/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				primary: "#00AEEF",
				background: "#69bdd442",
				secondary: "#f8f8f8",
			},
			boxShadow: {
				primaryShadow: "2px 70px 150px 90px #69bdd442",
			},
		},
	},
	plugins: [],
};
