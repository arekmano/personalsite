var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    header  = require('gulp-header'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    package = require('./package.json'),
    addsrc = require('gulp-add-src'),
    ngAnnotate = require('gulp-ng-annotate'),
    mainBowerFiles = require('main-bower-files');

var banner = [
  '/*!\n' +
  ' * <%= package.name %>\n' +
  ' * <%= package.title %>\n' +
  ' * <%= package.url %>\n' +
  ' * @author <%= package.author %>\n' +
  ' * @version <%= package.version %>\n' +
  ' */',
  '\n'
].join('');

gulp.task('css', function() {
    return gulp.src('src/scss/style.scss')
    .pipe(sass({errLogToConsole: true}))
    .pipe(autoprefixer('last 4 version'))
    .pipe(addsrc('bower_components/angular-material/angular-material.css'))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('app/assets/css'))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(header(banner, { package : package }))
    .pipe(gulp.dest('app/assets/css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('js',function(){
  gulp.src([
    'bower_components/angular/angular.js',
    'bower_components/angular-aria/angular-aria.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/angular-messages/angular-messages.js',
    'bower_components/angular-material/angular-material.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'bower_components/ngSticky/lib/sticky.js',
    'src/js/app.js',
    'src/js/*/*.js',
  ]).pipe(ngAnnotate())
    .pipe(concat('bundle.js'))
    .pipe(header(banner, { package : package }))
    .pipe(gulp.dest('app/assets/js'))
    .pipe(uglify())
    .pipe(header(banner, { package : package }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('app/assets/js'))
    .pipe(browserSync.reload({stream:true, once: true}));
});

gulp.task('jshint', function (){
  gulp.src('src/js/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
});

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "app"
        }
    });
});
gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('default', ['css', 'js', 'browser-sync'], function () {
    gulp.watch("src/scss/*.scss", ['css']);
    gulp.watch("src/js/**/*.js", ['js', 'jshint']);
    gulp.watch("app/*.html", ['bs-reload']);
});