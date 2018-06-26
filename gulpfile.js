var gulp = require('gulp');
var util = require('gulp-util')
var gulpConnect = require('gulp-connect');
var portfinder = require('portfinder');

var DIST_DIR = 'dist';

gulp.task('serve', function() {
  portfinder.getPort({port: 3000}, function (err, port) {
    gulpConnect.server({
      root: [DIST_DIR],
      port: port
    });
  });
});