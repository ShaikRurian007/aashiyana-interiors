/** @type {import('next').NextConfig} */

// For GitHub Pages project sites the app is served from /<repo>.
// Set NEXT_PUBLIC_BASE_PATH (e.g. "/aashiyana-interiors") in the CI build.
// Leave empty for a custom domain or a user/org page (username.github.io).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
