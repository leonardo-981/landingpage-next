/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  async rewrites() {
    return [
      {
        source: "/video/:path*",
        destination: "https://r2cdn.leonardocanuto98.workers.dev/:path*",
      },
    ];
  },
};

export default nextConfig;
