/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  rewrites() {
    return {
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        {
          source: '/blog/:path*',
          destination: `https://blog.usegravity.app/:path*`,
        },
        {
          source: '/:path*',
          destination: `https://blog.usegravity.app/:path*`,
        },
      ],
    }
  }
}

module.exports = nextConfig
