const gulp = require('gulp');
const sass = require('gulp-sass');
const webpackStream = require('webpack-stream');
const connect = require('gulp-connect');

function server() {
    connect.server({
        root: 'app',
        livereload: true
    });
}

function style() {
    return gulp.src('./app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css'))
        .pipe(connect.reload())
}

function js() {
    return gulp.src('./app/js/*.js')
        .pipe(webpackStream({
            output: {
                filename: 'app.bundle.js'
            },
            devtool: 'inline-source-map', // to debug bundle
        }))
        .pipe(gulp.dest('./app'))
        .pipe(connect.reload())
}

function watch() {
    gulp.watch('./app/scss/**/*.scss', style);
    gulp.watch('./app/js/**/*.js', js);
}

exports.style = style;
exports.js = js;
exports.server = server;
exports.watch = watch;

exports.default = gulp.parallel(watch, gulp.series(style, js, server));