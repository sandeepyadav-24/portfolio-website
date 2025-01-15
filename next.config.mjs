/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["private-user-images.githubusercontent.com", "cdn.example.com"], // Add the domains from which you'll load images
  },
};

export default nextConfig;
