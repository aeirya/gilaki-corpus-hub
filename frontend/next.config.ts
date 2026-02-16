import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/gilaki/:path*",
        destination: "http://fastapi:8000/api/gilaki/:path*", 
        // docker service name + backend port
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/gilaki",
        destination: "/",
        permanent: false, // important
      },
    ];
  },
};

export default nextConfig;
