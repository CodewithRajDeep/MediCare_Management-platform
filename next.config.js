import CopyPlugin from "copy-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: "node_modules/@rdkit/rdkit/dist/RDKit_minimal.wasm",
            to: "static/chunks",
          },
        ],
      })
    );

    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },

  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",
        destination: "https://health.api.nvidia.com/v1/biology/nvidia/molmim/:path*",
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/api/proxy/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, OPTIONS, PUT, DELETE",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
