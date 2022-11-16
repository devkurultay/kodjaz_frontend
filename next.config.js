/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');
const path = require('path');

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['cyrilic'] } }],
	},
	i18n,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
};

module.exports = nextConfig;
