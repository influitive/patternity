var gulp = require('gulp');
var gulpReplace = require('gulp-replace');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');

function adustIconNames(codepoints) {
  for(var i = 0; i < codepoints.length; i++){
    var orderingCodeIndex = codepoints[i].name.indexOf("-") + 1;
    codepoints[i].name = codepoints[i].name.substring(orderingCodeIndex);
  }
  return codepoints;
}

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

      codepoints = adustIconNames(codepoints);

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
