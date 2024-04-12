const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
// // const withAntdLess = require('next-plugin-antd-less');

// const nextConfig = {
//   reactStrictMode: true,
// };

// // module.exports = withAntdLess({
// //   lessVarsFilePath: './src/styles/variables.less',
// //   ...nextConfig,
// //   webpack(config) {
// //     return config;
// //   },
// // });

// module.exports = nextConfig;
