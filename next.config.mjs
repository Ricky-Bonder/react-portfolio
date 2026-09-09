/** @type {import('next').NextConfig} */

// The site is served from https://ricky-bonder.github.io/react-portfolio,
// so production builds need the repo name as base path. Development runs at /.
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/react-portfolio' : '';

const nextConfig = {
  output: 'export',

  // GitHub Pages serves folder/index.html, so both /about and /about/ resolve
  trailingSlash: true,

  basePath,

  // Exposed to the browser for manual asset URLs (e.g. <img src>)
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
