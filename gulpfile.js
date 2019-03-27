'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/assets/styles/pages/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/assets/styles'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/assets/styles/pages/*.scss', gulp.series('sass'));
});