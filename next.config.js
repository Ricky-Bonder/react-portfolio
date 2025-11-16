/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  images: { unoptimized: true },
  basePath: "/react-portfolio",
  assetPrefix: "/react-portfolio/",
};

module.exports = nextConfig;
