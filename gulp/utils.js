const notify        = require('gulp-notify');

module.exports = {
  errorHandler (err) {
    notify.onError({
      message: 'Error: <%= error.message %>'
    })(err);
    this.emit('end');
  }
};