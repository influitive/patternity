var webpack = require('webpack');

var sassPaths = require('node-neat').includePaths.map(function(sassPath) {
  return 'includePaths[]=' + sassPath;
}).join('&');

module.exports = {
  context: __dirname,

  devtool: 'eval-source-map',

  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],

  output: {
    path:       __dirname + '/build',
    filename:   'bundle.js',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test:   /\.css$/,
        loader: 'style!css',
      },
      {
        test:   /\.scss$/,
        loader: 'style!css!sass?outputStyle=expanded&' + sassPaths,
      },
      {
        test:    /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel']
      }
    ]
  }
};
