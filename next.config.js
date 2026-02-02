/** @type {import('next').NextConfig} */

// Definisci il nome del repo in una costante per non scriverlo due volte
const repoName = '/react-portfolio'; 

const nextConfig = {
  output: 'export',
  
  // Configurazione per il routing di Next.js
  basePath: repoName,
  
  // IMPORTANTE: Aggiungi questo blocco env per esporre la variabile al frontend
  env: {
    NEXT_PUBLIC_BASE_PATH: repoName,
  },
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;