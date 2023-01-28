/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['cyrilic'] } },
    ],
  },
  i18n: {
    ...i18n,
    localeDetection: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /ace-builds.*\/worker-.*$/,
      type: 'asset/resource',
    });
    return config;
  },
};

module.exports = nextConfig;
