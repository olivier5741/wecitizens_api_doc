var gulp = require('gulp');
var util = require('gulp-util')
var gulpConnect = require('gulp-connect');
var portfinder = require('portfinder');
var cors = require('cors');

var DIST_DIR = 'docs';

gulp.task('serve', function() {
  portfinder.getPort({port: 3000}, function (err, port) {
    gulpConnect.server({
      root: [DIST_DIR],
      port: port,
	  middleware: function() {
		return [cors()];
	  }
    });
  });
});