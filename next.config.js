/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/document-chatbot',
  assetPrefix: '/document-chatbot',
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true, asyncWebAssembly: true, layers: true };
    return config;
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  compiler: {
    typescript: {
      ignoreBuildErrors: true,
    },
  },

};

export default nextConfig;
