/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'images-na.ssl-images-amazon.com', protocol: 'https' }],
  },
}

module.exports = nextConfig
