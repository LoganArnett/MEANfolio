var gulp = require('gulp'),
    sass = require('gulp-sass'),
    neat = require('node-neat').includePaths,
    concat = require('gulp-concat'),
    minifyHTML = require('gulp-minify-html'),
    browserify = require('browserify'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    browserSync = require('browser-sync').create(),
    nodemon = require('gulp-nodemon'),
    imagemin = require('gulp-imagemin');


    // Static Server + watching scss/html files
gulp.task('server', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("public/scss/*.scss", ['sass']);
    gulp.watch('public/js/*.js').on('change', browserSync.reload);
    gulp.watch('public/js/**/*.js').on('change', browserSync.reload);
    gulp.watch("public/*.html").on('change', browserSync.reload);
    gulp.watch("public/views/*.html").on('change', browserSync.reload);
});

// Compile Sass task
gulp.task('sass', function() {
  return gulp.src('public/scss/*.scss')
    .pipe(sass({
      includePaths: ['sass'].concat(neat)
    }))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
});

// Minify index
gulp.task('html', function() {
  return gulp.src('index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('dist/'));
});

// JavaScript build task, removes whitespace and concatenates all files
gulp.task('scripts', function() {
  gulp.src('public/js/app.js')
  .pipe(browserify({
    insertGlobals: true,
    debug: true
  }))
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
});

// gulp.task('miniScripts', function() {
//   return gulp.src(['public/js/*.js', 'public/js/**/*.js'])
//   .pipe(concat('app.js'))
//   .pipe(uglify())
//   .pipe(gulp.dest('dist/js'))
// });

// Styles build task, concatenates all the files
gulp.task('styles', function() {
  return gulp.src(['public/libs/sweetalert2/dist/sweetalert2.css', 'public/libs/font-awesome/css/font-awesome.min.css', 'public/css/*.css'])
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('dist/css'));
});

// Image optimization task
gulp.task('images', function() {
  return gulp.src('public/assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/images'));
});

gulp.task('start', function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})

// Watch task
// gulp.task('watch', function() {

//   gulp.watch('site/scss/*.scss', ['sass']);
// });

// Serve Task with nodemon
gulp.task('serve', ['start', 'server'])

// Default task
gulp.task('default', ['jshint', 'sass', 'watch']);

// Build task
gulp.task('build', ['sass', 'html', 'scripts', 'styles', 'images']);
