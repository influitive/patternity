'use strict';

module.exports = function(_ref) {
  var Plugin = _ref.Plugin;
  var t = _ref.types;
  var optionsKey = '__importStripperOptions'

  function isValidOptions(options) {
    return typeof options === 'object' &&
      Array.isArray(options.patterns);
  }
  /**
   * Enforces plugin options to be defined and returns them.
   */
  function getPluginOptions(file) {
    if (!file.opts || !file.opts.extra) {
      return;
    }

    var pluginOptions = file.opts.extra['babel-plugin-import-stripper'];
    if (!isValidOptions(pluginOptions)) {
      throw new Error(
        'babel-plugin-import-stripper requires that you specify ' +
        'extra["babel-plugin-import-stripper"] in .babelrc ' +
        'or in your Babel Node API call options, and that it is an object with ' +
        'a patterns property which is an array.'
      );
    }
    return pluginOptions;
  }

  return new Plugin('babel-plugin-import-stripper', {
    visitor: {
      ImportDeclaration: function ImportDeclaration(node, parent, scope, file) {
        var options = getPluginOptions(file);
        var patterns = options.patterns;
        var willRemove = false;
        for (var pattern in patterns) {
          if (new RegExp(pattern).test(node.source.value)) {
            willRemove = true;
            break;
          }
        }
        if (willRemove) {
          console.log('[babel-plugin-import-stripper] Warning: Removing an import for \'' + node.source.value + '\' from ' + file.opts.filename);
          this.dangerouslyRemove();
        }
      }
    }
  });
};
