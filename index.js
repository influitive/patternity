var path           = require('path'),
    neatAndBourbon = require('node-neat');

// Note, once neat is NOT a dependency, the above can be replaced with:
// var bourbon = require('node-bourbon'), and used below

module.exports = {
  includePaths: neatAndBourbon.with(__dirname)
};
