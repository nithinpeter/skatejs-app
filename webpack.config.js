const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.jsx?$/, loader: 'babel-loader' }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './template.ejs'
      }),
  ],
  devtool: "inline-source-map",
}