
var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    cssnano     = require('gulp-cssnano'),
    rename      = require('gulp-rename'),
    del         = require('del'),
    cache       = require('gulp-cache'),
    jadepug     = require('gulp-pug');

gulp.task('sass', function () {
    return gulp.src('web/sass/*.+(sass|scss)')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('web/css'))
});

gulp.task('jade-pug', function () {
    return gulp.src('web/jade/pug/*.pug')
        .pipe(jadepug({pretty: true}))
        .pipe(gulp.dest('site/jade'))
});

gulp.task('min', ['sass'], function () {
    return gulp.src('web/css/main.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('web/css'))
});

gulp.task('clean-prod', function () {
    return del.sync('production')
});

gulp.task('watch', function () {
    gulp.watch('web/sass/**/*.+(sass|scss)', ['sass']);
    gulp.watch('web/css/main.css', ['min']);
    gulp.watch('web/jade/pug/*.pug', ['jade-pug']);
});

gulp.task('fill', ['clean-prod', 'min'], function () {
    return gulp.src('web/**/*')
        .pipe(gulp.dest('production'))
});

gulp.task('clear', function () {
    return cache.clearAll();
});

gulp.task('default', ['watch']);

gulp.task('build', ['sass', 'min', 'jade-pug']);