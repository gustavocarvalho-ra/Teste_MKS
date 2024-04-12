/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mks-sistemas.nyc3.digitaloceanspaces.com",
        port: "",
        pathname: "/products/**",
      },
    ],
  },
};

module.exports = nextConfig;