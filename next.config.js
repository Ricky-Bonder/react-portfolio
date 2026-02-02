/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Sostituisci esattamente con il nome del tuo repo
  basePath: '/react-portfolio', 
  // assetPrefix serve a indicare a Next dove sono i file JS/CSS
  assetPrefix: '/react-portfolio', 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
