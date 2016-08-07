'use strict';

const gulp        = require('gulp');
const browserSync = require('browser-sync');
const notify      = require('gulp-notify');
const reload      = browserSync.reload;
const config      = require('../config');

gulp.task('copy:vendors', () => {
  return gulp.src(config.copy.vendors.src)
    .pipe(gulp.dest(config.copy.vendors.dest))
    .pipe(reload({ stream: true }))
    .pipe(notify({
      title: 'Copy Vendors complete',
      message: 'Yay'
    }))
});

gulp.task('copy:fonts', () => {
  return gulp.src(config.copy.fonts.src)
    .pipe(gulp.dest(config.copy.fonts.dest))
    .pipe(reload({ stream: true }))
   .pipe(notify({
      title: 'Copy Fonts complete',
      message: 'Yay'
    }))
});

gulp.task('copy:images', () => {
  return gulp.src(config.copy.images.src)
    .pipe(gulp.dest(config.copy.images.dest))
    .pipe(reload({ stream: true }))
    .pipe(notify({
      title: 'Copy Images complete',
      message: 'Yay'
    }))
});

gulp.task('copy', ['copy:vendors', 'copy:fonts', 'copy:images']);