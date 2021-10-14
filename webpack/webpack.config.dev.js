const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const path = require('path');
const rootDir = process.cwd();

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
  },
});
