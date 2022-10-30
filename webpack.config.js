const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    liveReload: true,
    open: true,
    client: {
      reconnect: 5,
    },
  },
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Secrets Test',
      metaDesc: 'Description',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};
