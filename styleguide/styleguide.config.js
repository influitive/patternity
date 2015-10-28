var sassPaths = require('node-neat').includePaths.map(function(sassPath) {
  return 'includePaths[]=' + sassPath;
}).join('&');

module.exports = {
  title:               'Patternlab',
  componentsToDocDir:  ['../src', '../infl-components'],
  rootDir:             './src',
  components: function(config, glob) {
    var newCompsRoute = config.componentsToDocDir[0];
    var oldCompsRoute = config.componentsToDocDir[1];

    var comps1 = glob.sync(newCompsRoute + '/**/index.js');

    // Some exceptions that either don't have components or
    // have more than one.
    var exceptions = [oldCompsRoute + '/accordion.jsx',
      oldCompsRoute + '/alert.jsx',
      oldCompsRoute + '/button.jsx',
      oldCompsRoute + '/button_dropdown.jsx',
      oldCompsRoute + '/button_group.jsx',
      oldCompsRoute + '/sidebar.jsx',
      oldCompsRoute + '/stats_bar.jsx',
      oldCompsRoute + '/tabs.jsx',
      oldCompsRoute + '/text_area.jsx'];

    return comps1.concat(glob.sync(oldCompsRoute + '/**/*.jsx')
      .filter(function(path) {
        if (exceptions.indexOf(path) != -1)
          return false;
        return true;
      }));
  },
  updateWebpackConfig: function(webpackConfig, env) {
    webpackConfig.module.loaders = webpackConfig.module.loaders.concat({
      test:   /\.scss$/,
      loader: 'style!css!sass?outputStyle=expanded&' + sassPaths,
    });
    webpackConfig.module.loaders = webpackConfig.module.loaders.concat({
      test:   /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000',
    });

    return webpackConfig;
  },
  serverPort:    3003,
  styleguideDir: 'public'
};
