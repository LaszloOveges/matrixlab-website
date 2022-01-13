/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const prod = process.env.NODE_ENV === 'production';
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([
  [withPWA, { }],
  [withBundleAnalyzer, { }],
], {
  reactStrictMode: true,
  images: {
    domains: ['uploads-ssl.webflow.com'],
  },
  pwa: {
    disable: prod ? false : true,
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
});
