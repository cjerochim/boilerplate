'use strict';

const gulp        = require('gulp');
const postcss     = require('gulp-postcss');
const clean       = require('gulp-clean-css');
const sourcemaps  = require('gulp-sourcemaps');
const plumber     = require('gulp-plumber');
const notify      = require('gulp-notify');
const browserSync = require('browser-sync');
const reload      = browserSync.reload;
const gutil       = require('gulp-util');

const config      = require('../config');
const utils       = require('../utils');



gulp.task('css', () => {
  return gulp.src(config.css.src)
    .pipe(plumber({ errorHandler: utils.errorHandler }))
    .pipe(sourcemaps.init())
    .pipe(postcss([
      require('autoprefixer')({ browsers: ['last 2 versions'] }),
      require('cq-prolyfill/postcss-plugin')(),
      require('postcss-utilities')(),
      require('precss')(),
      require('lost')()
    ]))
    .pipe(gutil.env.env === 'prod'? clean() : gutil.noop())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.css.dest))
    .pipe(reload({ stream: true }))
    .pipe(notify({
      title: 'CSS Complete',
      message: 'Yay'
    }))

});