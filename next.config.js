/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/react-portfolio',
  assetPrefix: '/react-portfolio/',
};

module.exports = nextConfig;
