/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Removed for Vercel deployment to enable Image Optimization and API routes
  images: {
    // unoptimized: true // Removed to enable Vercel Image Optimization
  }
}

module.exports = nextConfig
