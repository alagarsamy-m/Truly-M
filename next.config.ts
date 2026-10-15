import type {NextConfig} from 'next';

const isExport = process.env.NEXT_EXPORT === 'true' || process.env.GITHUB_ACTIONS === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserOrOrgPagesRepo = repositoryName?.toLowerCase().endsWith('.github.io');
const derivedBasePath = isExport && repositoryName && !isUserOrOrgPagesRepo ? `/${repositoryName}` : '';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? derivedBasePath;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Automatically switches to static export on GitHub Actions or when NEXT_EXPORT=true
  output: isExport ? 'export' : 'standalone',
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
