// @flow
const path = require('path');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  webpack: (config, { dev }) => {
    config.plugins.push(new SWPrecacheWebpackPlugin({
      cacheId: 'sw-nextjs',
      filepath: `${path.join(path.resolve('static'),'sw-precache.js')}` ,
      maximumFileSizeToCacheInBytes: 4194304,
      
      stripPrefixMulti: {
        'C:/node-apps/next-sample/.next/bundles/pages': '',
        'C:/node-apps/next-sample/.next/dist/pages': '',
        'C:/node-apps/next-sample/.next/dist/components': '',
        'C:/node-apps/next-sample/.next/dist/styles': '',
        'C:/node-apps/next-sample/.next/': '/_next/'
      },
      runtimeCaching: [{
        handler: 'cacheFirst',
        urlPattern: /[.]mp3$/,
      }]
    }));

    // Important: return the modified config
    return config;
  }
};