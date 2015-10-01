var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    webpack = require('webpack'),
    runSequence = require('run-sequence'),
    webpackConfig = require("./webpack.config.js"),
    gutil = require("gulp-util"),
    template = require('gulp-template-compile'),
    ghPages = require('gulp-gh-pages'),
    minifyCss = require('gulp-minify-css');

/*
* Creates a lodash template of the less file to be used for the dynamic CSS generation
* */
gulp.task('templates', function () {
    gulp.src('./src/js/templates/*.html')
        .pipe(template())
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('./src/js'));
});


/*
 * Copies the index html to the site directory (which is used for gh-pages)
 * */
gulp.task('copy-index-html', function () {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./site'));
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

/*
* Creates a distribution folder and create tooltip.css and tooltip.minify.css
* */
gulp.task('build-dist', function () {
    return gulp.src('src/less/tooltip.less')
        .pipe(less())
        .pipe(concat('tooltip.css'))
        .pipe(gulp.dest('dist'))
        .pipe(minifyCss())
        .pipe(concat('tooltip.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('build-all', function (callback) {
    runSequence('webpack:build',
        'copy-index-html',
        ['templates', 'build-dist'],
        callback);
});

gulp.task('deploy-gh-pages', function() {
    return gulp.src('./site/**/*')
        .pipe(ghPages());
});


//git subtree push --prefix site origin gh-pages
