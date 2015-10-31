/*
* Dependencias
*/
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');
	
	
	cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css');
	
	



gulp.task('minify-css',  function(){
  return gulp.src('source/css/styles.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('source/css/'));
});

gulp.task('concat-files', function(){
	gulp.src(['source/js/jquery-1.11.3.min .js', 'source/js/lab9b.js'])
		.pipe(concat('lab9.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('source/js/concatenado/'))
});