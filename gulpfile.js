/**
 * @file gulpfile
 * @author cxtom <cxtom2008@gmail.com>
 */

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const babelHelpers = require('gulp-babel-external-helpers');

gulp.task('babel', function () {
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(babelHelpers('babelHelpers.js', 'umd'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('lib'));
});

gulp.task('build', ['babel']);

gulp.task('default', ['build']);
