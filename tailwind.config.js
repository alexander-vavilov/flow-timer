module.exports = {
	content: ['/index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			screens: {
				short: { raw: '(min-height: 578px)' },
			},
			fontFamily: {
				regular: 'Roboto, sans-serif',
			},
			height: {
				'dynamic-screen': '100dvh',
			},
		},
	},
	plugins: [],
}
