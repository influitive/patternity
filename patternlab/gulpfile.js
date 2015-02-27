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
			precision: 8
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