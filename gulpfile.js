'use strict';

const gulp = require('gulp'),
    atImport = require('postcss-import'),
    babelify = require('babelify'),
    batch = require('gulp-batch'),
    browserify = require('browserify'),
    browserSync = require('browser-sync').create(),
    buffer = require('vinyl-buffer'),
    del = require('del'),
    cssnext = require('postcss-cssnext'),
    data = require('gulp-data'),
    htmlmin = require('gulp-htmlmin'),
    jade = require('jade'),
    literalify = require('literalify'),
    gulpJade = require('gulp-jade'),
    gutil = require('gulp-util'),
    postcss = require('gulp-postcss'),
    proxy = require('proxy-middleware'),
    rename = require('gulp-rename'),
    run = require('gulp-run'),
    runSequence = require('run-sequence'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    url = require('url'),
    watchify = require('watchify'),
    watch = require('gulp-watch'),
    prjOps = require('./prj.json');

// set dependencies for
// development or production mode
const setDependecies = function() {

    const tpls = Object.assign({}, prjOps.tpls);
    const dependencies = tpls.dependencies.slice(0);

    tpls.dependencies = dependencies.map(function(item) {
        return process.env.NODE_ENV == 'production' ? item + '.min.js' : item + '.js';
    });

    return tpls;
};

const browserifyCustomOps = {
    entries: ['./src/scripts/index.js'],
    debug: true,
    transform: [babelify, literalify.configure(prjOps.literalify)]
};

const opts = Object.assign({}, watchify.args, browserifyCustomOps);
const b = watchify(browserify(opts));

const bundle = function() {
    return b.bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build'));
}

b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

gulp.task('browserify', bundle);

gulp.task('jade', function() {

    return gulp.src('./src/tpls/*.jade')
        .pipe(data(function() {
            return setDependecies();
        }))

    .pipe(gulpJade({
        jade: jade,
        pretty: true
    }))

    .pipe(gulp.dest('./build'))
});

gulp.task('postcss', function() {

    const processors = [
        atImport(),
        cssnext({ browsers: ['> 5%'] })
    ];

    return gulp.src('./src/styles/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./build'));
});

// Static server
gulp.task('browser-sync', function() {

    const proxy_options = function(value) {
        const proxyOptions = url.parse(value);
        proxyOptions.route = '/api';
        return proxyOptions;
    };

    browserSync.init({
        server: {
            name: 'dev',
            baseDir: './build'
                // middleware: [proxy(proxy_options('http://localhost:8080/api'))]
        },
        port: 5000,
        ui: {
            port: 3012
        },
        reloadDelay: 3000
    });
});

gulp.task('build', ['jade', 'postcss']);

gulp.task('debug', function() {
    watch('src/**/*', batch(function(events, done) {
        run('npm run test').exec();
        gulp.start('build', done);
    }));
});

gulp.task('default', ['debug', 'browser-sync', 'browserify']);

// =========
// dist
// =========

gulp.task('clean:dist', function() {
    return del('./dist/*');
});

gulp.task('copy:favicon', function() {
    return gulp.src('./assets/favicon.ico')
        .pipe(gulp.dest('./dist'));
});

gulp.task('minify:html', function() {
    return gulp.src('./build/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))
});

gulp.task('scripts', function() {

    const b = browserify(Object.assign({},
        browserifyCustomOps, { debug: false }));

    return b.bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(rename('bundle.js'))
        .on('error', gutil.log)
        .pipe(gulp.dest('./dist'));

});

gulp.task('set-prod-node-env', function() {
    return process.env.NODE_ENV = 'production';
});

gulp.task('dist', function() {
    return runSequence(
        'set-prod-node-env',
        'clean:dist',
        'build',
        'scripts',
        'copy:favicon',
        'minify:html'
    );
});

// ===========
// prepublish
// ===========

gulp.task('clean:prepublish', function() {
    return del(['./server/public/*', './build/*', './dist/*']);
});

gulp.task('copy:toserver', function() {
    return gulp.src('./dist/*')
        .pipe(gulp.dest('./server/public'));
});

gulp.task('prepublish', function() {
    runSequence(
        'set-prod-node-env',
        'clean:prepublish',
        'set-prod-node-env',
        'build',
        'scripts',
        'copy:favicon',
        'minify:html',
        'copy:toserver',
        'clean:dist'
    );
});
