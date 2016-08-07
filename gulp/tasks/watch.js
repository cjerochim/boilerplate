'use strict';

const gulp        = require('gulp');
const watch       = require('gulp-watch');
const batch       = require('gulp-batch')
const config      = require('../config');

gulp.task('watch', () => {
  const collection = config.watch;
  collection.forEach(watchItem => {
    watch(watchItem.src, batch((events, done) => {
      gulp.start(watchItem.task, done);
    }));
  });
});