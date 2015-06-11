/*!
 * paqs
 * Copyright (c) 2015 intuitivcloud Systems <engineering@intuitivcloud.com>
 * BSD-3-Clause Licensed
 */

/* eslint camelcase: 0 */

'use strict';

// module dependencies
var path = require('path'),
    webpack = require('webpack');

var copyrightBanner = 'paqs\nCopyright (c) 2015 intuitivcloud Systems <engineering@intuitivcloud.com>\nBSD-3-Clause Licensed',
    pluginsToUse = [
      new webpack.optimize.OccurenceOrderPlugin(true),
      new webpack.optimize.DedupePlugin()
    ];

module.exports = [
  {
    name: 'paqs client - dev',
    entry: './index.js',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'paqs.js',
      library: 'paqs',
      libraryTarget: 'var'
    },
    target: 'web',
    cache: false,
    devtool: 'hidden-source-map',
    plugins: pluginsToUse.concat(new webpack.BannerPlugin(copyrightBanner, { entryOnly: true }))
  },
  {
    name: 'paqs client - prod',
    entry: './index.js',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'paqs.min.js',
      library: 'paqs',
      libraryTarget: 'var'
    },
    target: 'web',
    cache: false,
    devtool: 'hidden-source-map',
    plugins: pluginsToUse.concat(new webpack.optimize.UglifyJsPlugin({
      compress: {
        dead_code: true,
        unused: true,
        warnings: true,
        join_vars: true
      },
      output: {
        comments: false
      },
      mangle: true
    }), new webpack.BannerPlugin(copyrightBanner, { entryOnly: true }))
  }
];
