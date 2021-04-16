const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/game.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'game.js',
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, '../'),
    }),
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true),
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        use: 'file-loader',
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
};