/*gulpfile with livereload */
var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./test.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./test.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);
