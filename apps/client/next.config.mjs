/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@pacakage/ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'velog.velcdn.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
