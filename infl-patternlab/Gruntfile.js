module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-gulp');
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			options: { force: true },
			files: ['./public/patterns']
		},
		concat: {
			options: {
				stripBanners: true,
				banner: '/* \n * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy") %> \n * \n * <%= pkg.author %>, and the web community.\n * Licensed under the <%= pkg.license %> license. \n * \n * Many thanks to Brad Frost and Dave Olsen for inspiration, encouragement, and advice. \n *\n */\n\n',
			},
			patternlab: {
				src: './builder/patternlab.js',
				dest: './builder/patternlab.js'
			},
			object_factory: {
				src: './builder/object_factory.js',
				dest: './builder/object_factory.js'
			},
			lineage: {
				src: './builder/lineage_hunter.js',
				dest: './builder/lineage_hunter.js'
			},
			media_hunter: {
				src: './builder/media_hunter.js',
				dest: './builder/media_hunter.js'
			},
			patternlab_grunt: {
				src: './builder/patternlab_grunt.js',
				dest: './builder/patternlab_grunt.js'
			},
			pattern_exporter: {
				src: './builder/pattern_exporter.js',
				dest: './builder/pattern_exporter.js'
			}
		},
		copy: {
			main: {
				files: [
				{ expand: true, cwd: './source/js/', src: '*', dest: './public/js/'},
				{ expand: true, cwd: './source/css/', src: 'style.css', dest: './public/css/' },
				{ expand: true, cwd: './source/images/', src: ['*.png', '*.jpg', '*.gif', '*.jpeg'], dest: './public/images/' },
				{ expand: true, cwd: './source/images/sample/', src: ['*.png', '*.jpg', '*.gif', '*.jpeg'], dest: './public/images/sample/'},
				{ expand: true, cwd: './source/fonts/', src: '*', dest: './public/fonts/'},
				{ expand: true, cwd: './source/_data/', src: 'annotations.js', dest: './public/data/' }
				]
			}
		},
		jshint: {
			options: {
				"curly": true,
				"eqnull": true,
				"eqeqeq": true,
				"undef": true,
				"forin": true,
				//"unused": true,
				"node": true
			},
			patternlab: ['Gruntfile.js', './builder/lib/patternlab.js']
		},
		watch: {
			// scss: { //scss can be watched if you like
			//	options: {
			//		livereload: true
			//	},
			// 	files: ['source/css/**/*.scss', 'public/styleguide/css/*.scss'],
			// 	tasks: ['default']
			// },
			all: {
				options: {
					livereload: true
				},
				files: [
				'source/_patterns/**/*.mustache',
				'source/_patterns/**/*.json',
				'source/_data/*.json'
				],
				tasks: ['default']
			}
		},
		sass: {
			build: {
				options: {
					style: 'expanded',
					precision: 8,
					loadPath: require('node-neat').includePaths
				},
				files: {
					'./source/css/style.css': './source/css/style.scss',
					'./public/styleguide/css/static.css': './public/styleguide/css/static.scss',
					'./public/styleguide/css/styleguide.css': './public/styleguide/css/styleguide.scss',
					'./public/styleguide/css/styleguide-specific.css': './public/styleguide/css/styleguide-specific.scss'
				}
			}
		},
		nodeunit: {
			all: ['test/*_tests.js']
		},
		connect: {
			app:{
				options: {
					port: 9001,
					base: './public',
					hostname: 'localhost',
					open: true,
					livereload: 35729
				}
			}
		},
		gulp : {
			browserify : function(){
				//compile react
				/* browserify task
				   ---------------
				   Bundle javascripty things with browserify!

				   If the watch task is running, this uses watchify instead
				   of browserify for faster bundling using caching.
				*/

				var gulp 				 = require('gulp');
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
			}
		}
	});

	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	//load the patternlab task
	grunt.task.loadTasks('./builder/');

	//if you choose to use scss, or any preprocessor, you can add it here
	grunt.registerTask('default', ['clean', 'concat', 'patternlab', 'sass', 'gulp:browserify', 'copy']);

	//travis CI task
	grunt.registerTask('travis', ['clean', 'concat', 'patternlab', /*'sass',*/ 'copy', 'nodeunit']);

	grunt.registerTask('serve', ['clean', 'concat', 'patternlab', /*'sass',*/ 'copy', 'connect', 'watch']);

};
