/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-c853b438c28f4099b37f01f2c65a7031.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;