/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["varshell.com", "cdn.shopify.com", "cdn.mahabis.com"],
  },
};

module.exports = nextConfig;
