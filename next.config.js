/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');

const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

module.exports = withPlugins([[withCSS], [withSass], [withBundleAnalyzer]], {
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html',
    },
  },
  webpack: (config, { dev, webpack }) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    }),
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
        })
      );
    return config;
  },
});
