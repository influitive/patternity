#!/usr/bin/env node
'use strict';
var fs = require('fs');
var path = require('path');
var S = require('string');
var gulp = require('gulp');
var minimist = require('minimist');
var chalk = require('chalk');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var replaceStr = '__comp__';
var argv = minimist(process.argv.slice(2));

gulp.task('create-component', function(){
  var cap = S(argv._[1]).capitalize();
	var snakeCase = S(cap).dasherize().chompLeft('-').s;
  var destinationDirectory = path.resolve(__dirname, '../src', snakeCase);
  if (fs.existsSync(destinationDirectory)){
    console.error(chalk.red('Component with name \''+cap+'\' already exists in \''+destinationDirectory+'\'.'));
    process.exit(1);
  }
  return gulp.src('template_component/**')
    .pipe(rename(function(p){
      p.dirname = p.dirname.replace(replaceStr, cap);
      p.basename = p.basename.replace(replaceStr, cap);
    }))
    .pipe(replace(replaceStr, cap, {skipBinary: true}))
    .pipe(gulp.dest('src/'+snakeCase));
});

switch (argv._[0]) {
	case 'create':
		if(!argv._[1]){
			commandHelp();
		}
		else{
			gulp.start('create-component', function(err){
				if(err){
					console.log(chalk.red('Failed: '+err));
				}
				else {
					console.log(chalk.green('Successfully created component.'));
				}
			});
		}
		break;
	default:
		commandHelp();
}

function commandHelp() {
	console.log([
		chalk.underline('Usage'),
		'',
		'    ' + chalk.bold('component') + ' ' + chalk.cyan('<command>') + ' ' + chalk.yellow('[<options>]'),
		'',
		chalk.underline('Commands'),
		'',
		'    ' + chalk.cyan('create <componentName>') + '           Create a basic component.'
	].join('\n'));
}
