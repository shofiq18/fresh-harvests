// /** @type {import('next').NextConfig} */
// const nextConfig = {};


// export default nextConfig;
/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */



const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'developer.apple.com',
      },
    ],
  },
};

export default nextConfig;
