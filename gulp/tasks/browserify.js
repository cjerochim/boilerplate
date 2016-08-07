'use strict';

const gulp          = require('gulp');
const browserify    = require('browserify');
const babelify      = require('babelify');
const source        = require('vinyl-source-stream');
const buffer        = require('vinyl-buffer');
const sourcemaps    = require('gulp-sourcemaps');
const notify        = require('gulp-notify');
const uglify        = require('gulp-uglify');
const browserSync   = require('browser-sync');
const gutil         = require('gulp-util');
const reload        = browserSync.reload;
const config        = require('../config');
const utils         = require('../utils');


gulp.task('browserify', () => {
  return browserify({ entries: config.browserify.src, debug: true })
    .transform(babelify)
    .bundle()
      .pipe(source('main.bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(gutil.env.env === 'prod'? uglify() : gutil.noop())
        .on('error', utils.errorHandler)
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(config.browserify.dest))
      .pipe(reload({ stream: true }))
      .pipe(notify({
        title: 'Browserify Complete',
        message: 'Yay',
      }))
});