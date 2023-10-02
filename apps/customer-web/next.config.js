//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nx/next');
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();
// env
const env = process.env;

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: env.ANALYZE === 'true',
});

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'vi',
    localeDetection: false,
  },
  publicRuntimeConfig: {
    API_PATH: {
      ESTORE: env.GATEWAY_ESTORE_SERVICE,
    },
    app: {
      ENVIRONMENT: env.ENVIRONMENT,
      VERSION: env.VERSION,
      DOMAIN: env.DOMAIN,
      GTM_ID: env.GTM_ID,
      GA_MEASUREMENT_ID: env.GA_MEASUREMENT_ID,
      HTTP_METHOD: env.HTTP_METHOD,
      VOUCHER_PRIVATE_KEY: env.VOUCHER_PRIVATE_KEY,
      VOUCHER_IV_KEY: env.VOUCHER_IV_KEY,
      TIME_OUT: env.TIME_OUT || 30000,
      IMAGE_CDN_URL: env.IMAGE_CDN_URL,
      S3_HOSTNAME: env.S3_HOSTNAME,
      CDN_HOSTNAME: env.CDN_HOSTNAME,
      ONE_SIGNAL_APP_ID: env.ONE_SIGNAL_APP_ID,
    },
  },
  serverRuntimeConfig: {
    API_PATH: {
      ESTORE: process.env.INTERNAL_ESTORE_SERVICE,
    },
    REVALIDATION_SECRET_KEY: env.REVALIDATION_SECRET_KEY,
    PREVIEW_CMS_SECRET_KEY: env.PREVIEW_CMS_SECRET_KEY,
    ROOT_PROJECT: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lc-ci.s3-sgn09.fptcloud.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ci-nhapthuoc-cms.s3-sgn09.fptcloud.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'uat-nhapthuoc-cms.s3-sgn09.fptcloud.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'prod-nhapthuoc-cms.s3-sgn09.fptcloud.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  compiler: {
    emotion: true,
  },
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}',
    },
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    config.module.rules.push({
      test: /index\.(js|mjs|jsx|ts|tsx)$/,
      include: (/** @type {string | string[]} */ mPath) => {
        return (
          mPath.includes('libs/ui-kit/src') ||
          mPath.includes('apps/customer-web/src') ||
          mPath.includes('apps/portal/src')
        );
      },
      sideEffects: false,
    });

    return config;
  },
  rewrites: async () => {
    return [
      {
        source: '/gioi-thieu',
        destination: '/ve-chung-toi/gioi-thieu',
      },
      {
        source: '/tos',
        destination: '/ve-chung-toi/tos',
      },
      {
        source: '/thong-tin-doanh-nghiep',
        destination: '/ve-chung-toi/thong-tin-doanh-nghiep',
      },
      {
        source: '/chinh-sach-bao-mat',
        destination: '/ve-chung-toi/chinh-sach-bao-mat',
      },
      {
        source: '/chinh-sach-giao-hang',
        destination: '/ve-chung-toi/chinh-sach-giao-hang',
      },
      {
        source: '/chinh-sach-doi-tra',
        destination: '/ve-chung-toi/chinh-sach-doi-tra',
      },
      {
        source: '/chinh-sach-thanh-toan',
        destination: '/ve-chung-toi/chinh-sach-thanh-toan',
      },
      {
        source: '/chinh-sach-thu-thap-va-xu-ly-du-lieu-ca-nhan',
        destination: '/ve-chung-toi/chinh-sach-thu-thap-va-xu-ly-du-lieu-ca-nhan',
      },
    ];
  },
  transpilePackages: ['@tsu-org/ui-kit'],
};

module.exports = async (/** @type {string} */ phase) => {
  let updatedConfig;

  updatedConfig = await withNx(withBundleAnalyzer(withVanillaExtract(nextConfig)))(phase);

  return updatedConfig;
};
