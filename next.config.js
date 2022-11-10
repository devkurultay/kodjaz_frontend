/** @type {import('next').NextConfig} */

const path = require('path');
const locales = require('./intl/locales');

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['cyrilic'] } }],
	},
	i18n: {
		locales,
		defaultLocale: 'ky-KG',
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
};

module.exports = nextConfig;
