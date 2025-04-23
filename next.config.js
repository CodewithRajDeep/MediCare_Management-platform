const CopyPlugin = require("copy-webpack-plugin");
const { withSentryConfig } = require("@sentry/nextjs");

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

module.exports = withSentryConfig(nextConfig, {
  org: "deepraj-ox",
  project: "drugdiscovery-nextjs",

  silent: !process.env.CI,
  widenClientFileUpload: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
