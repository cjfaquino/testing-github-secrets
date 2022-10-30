const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
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
