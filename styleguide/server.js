var express = require('express');
var webpack = require('webpack');
var styleguidist = require('react-styleguidist');
var makeWebpackConfig = styleguidist.MakeWebpackConfig;
var config = styleguidist.Config;

module.exports = function server(callback) {
  var app = express();
  var compiler = webpack(makeWebpackConfig('development'));

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  app.listen(config.serverPort, config.serverHost, function(err) {
    callback(err, config);
  });
};
