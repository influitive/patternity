var pkg = require('./package.json'),
    gulp = require('gulp'),
    eol = require('os').EOL,
    rimraf = require('gulp-rimraf'),
    strip_banner = require('gulp-strip-banner'),
    header = require('gulp-header'),
    connect = require('gulp-connect'),
    nodeunit = require('gulp-nodeunit'),
		hint = require('gulp-jshint'),
		sass = require('gulp-sass'),
		watch = require('gulp-watch');

require('gulp-load')(gulp);
var banner = [ '/** ',
  ' * <%= pkg.name %> - v<%= pkg.version %> - <%= today %>',
  ' * ', ' * ',
  ' * <%= pkg.author %>, and the web community.',
  ' * Licensed under the <%= pkg.license %> license.',
  ' * ',
  ' * Many thanks to Brad Frost and Dave Olsen for inspiration, encouragement, and advice.',
  ' * ', ' * ', ' **/'].join(eol);

//load patternlab-node tasjs
gulp.loadTasks(__dirname+'/builder/gulp-patternlab.js');
//clean patterns dir
gulp.task('clean', function(){
  return gulp.src('./public/patterns/*', {read:false})
    .pipe(rimraf())
})
//(re)place a banner
gulp.task('banner', function(){
  return gulp.src(['./builder/patternlab.js', './builder/object_factory.js'])
    .pipe(strip_banner())
    .pipe(header( banner, {
      pkg : pkg,
      today : new Date().getFullYear() }
    ))
    .pipe(gulp.dest('./builder'));
})
//copy tasks
gulp.task('cp:js', function(){
  return gulp.src('**/*.js', {cwd:'./source/js'})
    .pipe(gulp.dest('./public/js'))
});
gulp.task('cp:img', function(){
  return gulp.src(
    [ '**/*.gif', '**/*.png', '**/*.jpg', '**/*.jpeg'  ],
    {cwd:'./source/images'} )
    .pipe(gulp.dest('./public/images'))
});
gulp.task('cp:font', function(){
  return gulp.src('*', {cwd:'./source/fonts'})
    .pipe(gulp.dest('./public/fonts'))
});
//server
gulp.task('connect', function(){
  return connect.server({
    root: './public',
    host: 'localhost',
    port: 9001,
    livereload: false,
  })
})
//unit test
gulp.task('nodeunit', function(){
  return gulp.src('./test/**/*_tests.js')
    .pipe(nodeunit());
})
//lint patterlab builder files
gulp.task('jshint', function(){
	//see package.json for js hint options
	return gulp.src('./builder/**/*.js')
		.pipe(hint())
		.pipe(hint.reporter('default'));
})
//sass
gulp.task('sass', function(){
	return gulp.src('./source/css/*.scss')
		.pipe(sass({
			outputStyle: 'nested',
			precision: 8,
      includePaths: require('node-neat').includePaths
		}))
		.pipe(gulp.dest('./public/css'));
})
//watch tasks
gulp.task('w:sass', function(){
	return watch('./source/css/**/*.scss', function(files){
		return gulp.start('sass');
	})
});
gulp.task('w:sass', function(){
	return watch('./source/css/**/*.scss', function(files){
		return gulp.start('sass');
	})
})
gulp.task('w:patterns', function(){
	return watch([
		'./source/_patterns/**/*.mustache',
		'./source/_patterns/**/*.json',
		'./source/_data/*.json'	],
		function(){
			return gulp.start('patterns');
		})
});

//compile react
/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/

var browserify   = require('browserify');
var source       = require('vinyl-source-stream');
var reactify     = require('reactify');
var buffer       = require('vinyl-buffer');
var uglify       = require('gulp-uglify');
var gulpIf       = require('gulp-if');
var gutil        = require('gulp-util');
var prettyHrtime = require('pretty-hrtime');
var startTime;
var taskName;

var env = process.env.NODE_ENV || 'development';
var digest = process.env.ASSETS_DIGEST || false;
var path = process.env.ASSETS_PREFIX || '/assets-build';
if(path) {
  path = path.slice(1, path.length)
}


var assetsConfig = {
  digest: digest,
  path: path,
  compress: (env != 'development' && env != 'qa')
}

var bundleLogger = function(task) {
  var taskName = task;

  return {
    start: function() {
      startTime = process.hrtime();
      gutil.log('Running', gutil.colors.green("'" + taskName + "'") + '...');
    },

    end: function() {
      var taskTime = process.hrtime(startTime);
      var prettyTime = prettyHrtime(taskTime);
      gutil.log('Finished', gutil.colors.green("'" + taskName + "'"), 'in', gutil.colors.magenta(prettyTime));
    }
  };
};

var notify = require('gulp-notify');

var handleErrors = function() {
  var args = Array.prototype.slice.call(arguments);

  notify.onError({
    title: 'Compile Error',
    message: "<%= error.message %>"
  }).apply(this, args);

  this.emit('end');
};

gulp.task('browserify', function() {
  var bundler = browserify({
    // Required watchify args
    cache: {}, packageCache: {}, fullPaths: true,
    // Specify the entry point of your app
    entries: ['./source/js/application.js'],
    paths: [
      './node_modules',
      './source/',
      './infl-components/'
    ],
    noParse: [
      'jquery',
      'underscore'
    ]
  });

  var bundle = function() {
    // Log when bundling starts
    var logger = new bundleLogger('browserify');
    logger.start();

    return bundler
      .transform(reactify)
      .bundle()
      // Report compile errors
      .on('error', handleErrors)
      // Use vinyl-source-stream to make the
      // stream gulp compatible. Specifiy the
      // desired output filename here.
      .pipe(source('infl-components.js'))
      // uglify if compress is set
      .pipe(buffer())
      .pipe(gulpIf(assetsConfig.compress, uglify()))
      // Specify the output destination
      .pipe(gulp.dest('./source/js'))
      // Log when bundling completes!
      .on('end', logger.end);
  };

  return bundle();
});



gulp.task('default', ['lab', 'watch']);

gulp.task('watch', ['w:sass', 'w:patterns']);
gulp.task('assets', ['cp:js', 'cp:img', 'cp:font' /* , 'sass' */]);
gulp.task('prelab', ['clean', 'banner', 'assets']);
gulp.task('lab', ['prelab', 'patternlab']);
gulp.task('patterns', ['patternlab:only_patterns']);
gulp.task('serve', ['lab', 'connect']);
gulp.task('travis', ['lab', 'nodeunit']);

gulp.task('version', ['patternlab:version']);
gulp.task('help', ['patternlab:help']);
