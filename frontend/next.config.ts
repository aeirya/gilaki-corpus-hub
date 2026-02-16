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
        source: "/glk/:path*",
        destination: "/gilaki-corpus-hub/:path*",
        permanent: false,
      },
    ];
  }
};

export default nextConfig;
