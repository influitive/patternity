var webpack = require('webpack');

console.log(__dirname);
module.exports = {
  context: __dirname,

  devtool: 'eval',

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
        test:   /\.scss$/,
        loader: 'style!css!sass?outputStyle=expanded'
      },
      {
        test:    /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel']
      }
    ]
  }
};
