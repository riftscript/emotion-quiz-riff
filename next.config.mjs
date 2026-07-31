/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    useWasmBinary: true,
  },
};

export default nextConfig;
