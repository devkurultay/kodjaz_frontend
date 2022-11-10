/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '992px',
			xl: '1440px',
		},
		colors: {
			blue: '#1fb6ff',
			purple: '#7e5bef',
			pink: '#ff49db',
			orange: '#ff7849',
			green: '#13ce66',
			yellow: '#ffc82c',
			'gray-dark': '#273444',
			gray: '#8492a6',
			'gray-light': '#d3dce6',
		},
		container: {
			center: true,
			DEFAULT: '1rem',
			sm: '2rem',
			lg: '4rem',
			xl: '5rem',
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		fontSize: {
			xs: ['12px', '15px'],
			sm: ['14px', '18px'],
			base: ['16px', '18px'],
			md: ['24px', '32px'],
			lg: ['32px', '40px'],
			xl: ['40px', '48px'],
		},
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
	plugins: [],
};
