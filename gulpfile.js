var gulp = require('gulp');
var flatten = require('gulp-flatten');
var watch = require('gulp-watch');
var postScss = require('postcss-scss');
var postcss = require('gulp-postcss');
var rucksack = require('rucksack-css');
var replace = require('gulp-replace');
var lost = require('lost');
var minmax = require('postcss-media-minmax');
var nested = require('postcss-nested');

gulp.task('copy-lib-styles', function() {
  return gulp.src(['src/**/*.scss', 'src/**/*.css'])
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

gulp.task('default', ['copy-lib-styles']);
