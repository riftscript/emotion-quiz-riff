/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/emotion-quiz",
  assetPrefix: "/emotion-quiz/",
  experimental: {
    useWasmBinary: true,
  },
};

export default nextConfig;
