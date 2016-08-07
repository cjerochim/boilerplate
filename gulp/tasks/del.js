'use strict';

const gulp        = require('gulp');
const rimraf      = require('rimraf');
const config      = require('../config');

gulp.task('clean', done => {
  rimraf(config.del.src, done);
});