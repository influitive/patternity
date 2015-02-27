var patternlab_engine = require('./patternlab.js');

module.exports = function(gulp) {

  gulp.task('patternlab', function(){
    var patternlab = patternlab_engine();
    patternlab.build();
  });

  gulp.task('patternlab:version', function(){
    var patternlab = patternlab_engine();
    patternlab.version();
  })

  gulp.task('patternlab:only_patterns', function(){
    var patternlab = patternlab_engine();
    patternlab.build_patterns_only();
  })

  gulp.task('patternlab:help', function(){
    var patternlab = patternlab_engine();
    patternlab.help();
  })

}