var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
 
gulp.task('influicons', function(){

  // use SVG files from this directory
  gulp.src(['infl-icons/SVG/*.svg'])

    // build the woff, ttf, svg, eot font files named "influicons"
    .pipe(iconfont({
      fontName: 'influicons',
      fixedWidth: true,
      centerHorizontally : true,
      normalize: true
    }))

    .on('codepoints', function(codepoints, options) {

      // generate a static CSS demo file
      gulp.src('infl-icons/templates/influicons.css')
        .pipe(consolidate('lodash', {
          glyphs: codepoints,
          fontName: 'influicons',
          fontPath: 'infl-fonts/',
          className: 'ic'
        }))
        .pipe(gulp.dest('infl-fonts/'));

      // generate a static HTML demo file
      gulp.src('infl-icons/templates/influicons.html')
        .pipe(consolidate('lodash', {
          glyphs: codepoints,
          fontName: 'influicons',
          fontPath: 'infl-fonts/',
          className: 'ic'
        }))
        .pipe(gulp.dest('infl-fonts/'));

      // generate the patternity "ic" sass file
      gulp.src('infl-icons/templates/_icon.scss')
        .pipe(consolidate('lodash', {
          glyphs: codepoints,
          fontName: 'influicons',
          fontPath: 'infl-fonts/',
          className: 'ic'
        }))
        .pipe(gulp.dest('infl-styles/'));

      // generate the patternity influicons-list.js file used by "icons_pattern.jsx"
      gulp.src('infl-icons/templates/influicons-list.js')
        .pipe(consolidate('lodash', {
          glyphs: codepoints,
          fontName: 'influicons',
          fontPath: 'infl-fonts/',
          className: 'ic'
        }))
        .pipe(gulp.dest('infl-patternlab/source/js/patterns/atoms/'));
      

    })
    .pipe(gulp.dest('infl-fonts/'));
});

gulp.task('default', ['influicons']);