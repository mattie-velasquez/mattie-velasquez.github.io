/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // This helps with client-side routing
  trailingSlash: true,
};

module.exports = nextConfig;
