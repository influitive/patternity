var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var flatten = require('gulp-flatten');
var watch = require('gulp-watch');
var postScss = require('postcss-scss');
var postcss = require('gulp-postcss');
var rucksack = require('rucksack-css');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var lost = require('lost');
var minmax = require('postcss-media-minmax');
var nested = require('postcss-nested');

function adustIconNames(codepoints) {
  return codepoints.map(function(codepoint) {
    codepoint.name = codepoint.name.split('-').slice(1).join('-');
    return codepoint;
  });
}

gulp.task('influicons', function() {
  // use SVG files from this directory
  gulp.src(['infl-icons/SVG/*.svg'])
    // build the woff, ttf, svg, eot font files named "influicons"
    .pipe(iconfont({
      fontName:           'influicons',
      fixedWidth:         true,
      centerHorizontally: true,
      normalize:          true
    }))
    .on('codepoints', function(codepoints) {
      codepoints = adustIconNames(codepoints);

      // generate a static CSS demo file
      gulp.src('infl-icons/templates/influicons.css')
        .pipe(consolidate('lodash', {
          glyphs:    codepoints,
          fontName:  'influicons',
          fontPath:  'infl-fonts/',
          className: 'ic'
        }))
        .pipe(gulp.dest('infl-fonts/'));

      // generate a static HTML demo file
      gulp.src('infl-icons/templates/influicons.html')
        .pipe(consolidate('lodash', {
          glyphs:    codepoints,
          fontName:  'influicons',
          fontPath:  'infl-fonts/',
          className: 'ic'
        }))
        .pipe(gulp.dest('infl-fonts/'));

      // generate the patternity "ic" sass file
      gulp.src('infl-icons/templates/_icon.scss')
        .pipe(consolidate('lodash', {
          glyphs:    codepoints,
          fontName:  'influicons',
          fontPath:  'infl-fonts/',
          className: 'ic'
        }))
        .pipe(gulp.dest('src/icon/'));

      // generate the patternity readme file for icon
      gulp.src('infl-icons/templates/icon.readme.md')
        .pipe(consolidate('lodash', {
          glyphs:    codepoints
        }))
        .pipe(rename('Readme.md'))
        .pipe(gulp.dest('src/icon/'));
    })
    .pipe(gulp.dest('infl-fonts/'));
});

gulp.task('copy-lib-styles', function() {
  return gulp.src('src/**/*.scss')
    .pipe(postcss([rucksack({autoprefixer: true}), nested(), lost(), minmax()], {syntax: postScss}))
    .pipe(gulp.dest('lib'))
    .pipe(flatten())
    .pipe(replace(/~patternity\/([a-z\-\_]+\/)*/g, ''))
    .pipe(gulp.dest('infl-styles'));
});

gulp.task('watch-scss', function() {
  return watch('src/**/*.scss', function() {
    gulp.start('copy-lib-styles');
  });
});

gulp.task('default', ['influicons']);
