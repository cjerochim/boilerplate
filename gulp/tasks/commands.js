'use strict';

const gulp      = require('gulp');

gulp.task('default', ['clean', 'build']);

gulp.task('build', ['browserify', 'css', 'copy']);

gulp.task('dev', ['build', 'watch']);