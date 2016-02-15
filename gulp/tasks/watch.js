var gulp = require('gulp');

var config  = require('../config');

// watch
gulp.task('watch', function(){
  // js
  gulp.watch(config.src.js+'*', ['js']);
});