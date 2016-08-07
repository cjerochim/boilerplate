
/**
 Del
**/
module.exports.del = {
  src: './dist'
};

module.exports.copy = {
  vendors: {
    src: './app/vendors/**/*.*',
    dest: './dist/vendors',
  },
  fonts: {
    src: './app/assets/fonts/**/*.*',
    dest: './dist/fonts/',
  },
  images: {
    src: './app/assets/images/**/*.*',
    dest: './dist/images/',
  }
};

/**
 JavaScript assets 
 todo:react
**/
module.exports.browserify = {
  src: './app/js/main.js',
  dest: './dist/js',
};

/**
 Css assets
**/
module.exports.css = {
  src: './app/css/screen.css',
  dest: './dist/css',
};

module.exports.watch = [
  { src: './app/js/**/*.js' , task: ['browserify'] },
  { src: './app/css/**/*.css', task: ['css'] },
  { src: './app/vendors/**/*.*', task: ['copy:vendors']},
  { src: './app/assets/images/**/*.*', task: ['copy:images']},
  { src: './app/assets/fonts/**/*.*', task: ['copy:fonts']},
];