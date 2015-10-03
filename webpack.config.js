var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: path.resolve(ROOT_PATH, 'index.js'),
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js',
    publicPath: "/assets/",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    port: "5000",
    colors: true,
    historyApiFallback: true,
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
