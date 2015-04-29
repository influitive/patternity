var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
 
gulp.task('influicons', function(){
  gulp.src(['SVG/*.svg'])
    .pipe(iconfont({
      fontName: 'influicons',
      fixedWidth: true,
      centerHorizontally : true,
      normalize: true
    }))

    .on('codepoints', function(codepoints, options) {

      gulp.src('templates/influicons.css')
        .pipe(consolidate('lodash', {
          glyphs: codepoints,
          fontName: 'influicons',
          fontPath: 'fonts/',
          className: 'ic'
        }))
        .pipe(gulp.dest('fonts/'));

      gulp.src('templates/influicons-font.css')
        .pipe(consolidate('lodash', {
          glyphs: codepoints,
          fontName: 'influicons',
          fontPath: 'fonts/',
          className: 'ic'
        }))
        .pipe(gulp.dest('fonts/'));

      gulp.src('templates/influicons-icons.css')
        .pipe(consolidate('lodash', {
          glyphs: codepoints,
          fontName: 'influicons',
          fontPath: 'fonts/',
          className: 'ic'
        }))
        .pipe(gulp.dest('fonts/'));

      gulp.src('templates/influicons.html')
        .pipe(consolidate('lodash', {
          glyphs: codepoints,
          fontName: 'influicons',
          fontPath: 'fonts/',
          className: 'ic'
        }))
        .pipe(gulp.dest('fonts/'));

    })
    .pipe(gulp.dest('fonts/'));
});

