const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: "./src/game.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'game.js'
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
  }),
    new HtmlWebpackPlugin()
  ],
  module: {
    rules: [{
      test: /\.(png|jpg|gif)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'assets'
        }
      }
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  }
};