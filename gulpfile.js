var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    webpack = require('webpack'),
    runSequence = require('run-sequence'),
    webpackConfig = require("./webpack.config.js"),
    gutil = require("gulp-util"),
    template = require('gulp-template-compile');


gulp.task('copy-index-html', function () {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./public'));
});

gulp.task("webpack:build", function (callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);

    myConfig.plugins = myConfig.plugins.concat(
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                "NODE_ENV": JSON.stringify("production")
            }
        })
        //new webpack.optimize.DedupePlugin(),
        //new webpack.optimize.UglifyJsPlugin()
    );

    // run webpack
    webpack(myConfig, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack:build", err);

        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('build', function (callback) {
    runSequence('webpack:build',
        'copy-index-html',
        callback);
});

//gulp.task('move-fonts', function () {
//    gulp.src('./*.{ttf,woff,woff2,eof,eot,svg}')
//        .pipe(gulp.dest('./public'))
//        .on('end', function () {
//            del('./*.{ttf,woff,woff2,eof,eot,svg}');
//        });
//});
//gulp.task('styles', function () {
//    return gulp.src('../less/*.less')
//        .pipe(less())
//        .pipe(concat('app.css'))
//        .pipe(gulp.dest('../css/'));
//});

//gulp.task('tt-styles', function () {
//    return gulp.src('../../base/*.less')
//        .pipe(less())
//        .pipe(concat('tooltip.css'))
//        .pipe(gulp.dest('../../base/'));
//});
//
gulp.task('templates', function () {
    gulp.src('./src/js/templates/*.html')
        .pipe(template())
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('./src/js'));
});
//
//
//
//gulp.task('full', ['webpack', 'copy-ttf-files']);
//
//// Watch Files For Changes
//gulp.task('watch', function () {
//    gulp.watch('../js/templates/*.html', ['templates']);
//    gulp.watch('../less/*.less', ['styles']);
//    gulp.watch('../../base/*.less', ['tt-styles']);
//});
//
//// Default Task
//gulp.task('default', ['styles', 'templates']);
//gulp.task('watch-default', ['styles', 'templates', 'watch']);