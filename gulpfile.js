var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var filesize = require('gulp-filesize');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var handlebars = require('gulp-handlebars');
var defineModule = require('gulp-define-module');
var header = require('gulp-header');


// Package for js sources
var jsPackage = [
    './src/javascript/main/package/Manager.js',
    './src/javascript/main/config/Properties.js',
    './src/javascript/main/utils/Helpful.js',
    './src/javascript/main/models/**/*.js',
    './src/javascript/main/views/**/*.js',
    './src/javascript/main/start.js'
];


// Package for js vendors
var jsVendorsPackage = [
    './src/javascript/vendors/jquery.min.js',
    './src/javascript/vendors/bootstrap.min.js',
    './src/javascript/vendors/handlebars.runtime.js'
];


// Package for css sources
var cssPackage = [
    './src/stylesheet/main/theme.less',
    './src/stylesheet/main/**/*.less'
];


// Package for css vendors
var cssVendorsPackage = [
    './src/stylesheet/vendors/normalize.css',
    './src/stylesheet/vendors/**/*.css'
];


// Package for templates
var templatesPackage = [
    './src/javascript/main/templates/**/*.hbs'
];


// Build js vendors
gulp.task('buildJsVendors', function() {
    gulp.src(jsVendorsPackage)
        .pipe(concat('vendors.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build'))
        .pipe(filesize())
        .on('error', gutil.log)
});


// Build js.
gulp.task('buildJs', function() {
    gulp.src(jsPackage)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./build'))
        .pipe(filesize())
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('./build'))
        .pipe(filesize())
        .on('error', gutil.log)
});


// Build css.
gulp.task('buildCss', function() {
    gulp.src(cssPackage)
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./build'))
        .pipe(filesize())
        .pipe(minifyCSS())
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('./build'))
        .pipe(filesize())
        .on('error', gutil.log)
});


// Build css vendors.
gulp.task('buildCssVendors', function() {
    gulp.src(cssVendorsPackage)
        .pipe(concat('vendors.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./build'))
        .pipe(filesize())
        .on('error', gutil.log)
});


// Build handlebars templates.
gulp.task('buildTemplates', function() {
    gulp.src(templatesPackage)
        .pipe(handlebars())
        .pipe(defineModule('plain', {
            wrapper: 'HBSTemplates["<%= templateName %>"] = <%= handlebars %>',
            context: function(context) {
                var file = context.file;
                var fullPath = file.path;
                var tplPath = fullPath.split("javascript/main/templates/").pop();

                var find = '/';
                var regex = new RegExp(find, 'g');

                var name = tplPath.replace(regex, '.').replace('.js', '');

                return { templateName: name };
            }
        }))
        .pipe(concat('app.templates.js'))
        .pipe(header('var HBSTemplates = HBSTemplates || {};'))
        .pipe(gulp.dest('./build'))
        .pipe(filesize())
        .on('error', gutil.log);
});




// Watch the modifications and re-build.
gulp.task('watch', function() {
    gulp.watch(jsPackage, ['buildJs']);
    gulp.watch(jsVendorsPackage, ['buildJsVendors']);
    gulp.watch(cssPackage, ['buildCss']);
    gulp.watch(cssVendorsPackage, ['buildCssVendors']);
    gulp.watch(templatesPackage, ['buildTemplates']);
});


gulp.task('default', ['buildJsVendors', 'buildJs', 'buildCssVendors', 'buildCss', 'buildTemplates', 'watch']);

