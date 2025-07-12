/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  fs: "empty",
  // ✅ Do NOT add experimental.turbo or config.turbopack anymore
  // ✅ Turbopack is automatically enabled when running `next dev --turbopack`
};

export default nextConfig;
