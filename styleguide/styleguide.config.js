var sassPaths = require('node-neat').includePaths.map(function(sassPath) {
  return 'includePaths[]=' + sassPath;
}).join('&');
var dir = __dirname;
module.exports = {
  title:               'Patternlab',
  componentsToDocDir:  ['../src', '../infl-components'],
  rootDir:             './src',
  components: function(config, glob) {
    var newCompsRoute = config.componentsToDocDir[0];
    var oldCompsRoute = config.componentsToDocDir[1];

    var comps1 = glob.sync(newCompsRoute + '/**/index.js');

    // Some exceptions regexps for files that either don't have components or
    // have more than one.
    var exceptions = [oldCompsRoute + '/accordion\.jsx',
      oldCompsRoute + '/alert\.jsx',
      oldCompsRoute + '/button\.jsx',
      oldCompsRoute + '/button_dropdown\.jsx',
      oldCompsRoute + '/button_group\.jsx',
      oldCompsRoute + '/sidebar\.jsx',
      oldCompsRoute + '/stats_bar\.jsx',
      oldCompsRoute + '/tabs\.jsx',
      oldCompsRoute + '/text_area\.jsx',
      oldCompsRoute + '/tabs/.*',
      oldCompsRoute + '/cards/.*'];

    return comps1.concat(glob.sync(oldCompsRoute + '/*.jsx').concat(glob.sync(oldCompsRoute + '/*/*.jsx'))
      .filter(function(path) {
        for(i in exceptions){
          if( new RegExp(exceptions[i]).test(path) ){
            return false;
          }
        }
        return true;
      }));
  },
  getExampleFilename: function(componentpath) {
    var newpath;
    var oldCompsRegex = /\/infl-components\//;
    var oldComps = oldCompsRegex.test(componentpath);
    if (oldComps) {
      newpath = componentpath.replace(oldCompsRegex, '/infl-components-examples/').replace(/\.jsx?$/, '.readme.md');
    }
    else {
      newpath = componentpath.replace(/\/index.js$/, '\/Readme.md');
    }
    return newpath;
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

  serverPort:    3000,
  styleguideDir: 'public',
  hideErrors: true,
  errorComponent: dir + '/src/components/PreviewError'
};
