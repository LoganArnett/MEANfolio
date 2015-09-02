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
    browserSync = require('browser-sync').create();

    // Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

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
  return gulp.src('public/index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('dist/'));
});

// JavaScript build task, removes whitespace and concatenates all files
gulp.task('scripts', function() {
  return browserify(['public/js/*.js', 'public/js/**/*.js'])
    .bundle()
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Styles build task, concatenates all the files
gulp.task('styles', function() {
  return gulp.src('public/css/*.css')
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('dist/css'));
});

// Image optimization task
gulp.task('images', function() {
  return gulp.src('public/assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

// Watch task
// gulp.task('watch', function() {

//   gulp.watch('site/scss/*.scss', ['sass']);
// });

// Default task
gulp.task('default', ['jshint', 'sass', 'watch']);

// Build task
gulp.task('build', ['jshint', 'sass', 'html', 'scripts', 'styles', 'images']);
