'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const rimraf = require('rimraf');
const sequence = require('run-sequence');
const concat = require('gulp-concat');
const addStream = require('add-stream');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');
const plumber = require('gulp-plumber');
const ngannotate = require('gulp-ng-annotate');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();
const KarmaServer = require('karma').Server;
const protractor = require("gulp-protractor").protractor;
const angularTemplateCache = require('gulp-angular-templatecache');

const config = require('./gulpfile.config');

const prepareTemplates = function prepareTemplates() {
	return gulp.src(config.templateCache.source)
		.pipe(angularTemplateCache({
			module: config.templateCache.moduleName
		}));
};

const indexTemplate = function indexTemplate() {
	return gulp.src(config.templateCache.index)
		.pipe(plumber())
		.pipe(gulpif(config.environment == 'prod', htmlmin({collapseWhitespace: true})))
		.pipe(gulp.dest(config[config.environment]));
};

const styles = function styles() {
	return gulp.src(config.styles.source)
		.pipe(plumber())
		.pipe(gulpif(config.environment == 'dev', sourcemaps.init()))
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
		browsers: config.browsers
		}))
		.pipe(gulpif(config.environment == 'prod', cssnano()))
		.pipe(gulpif(config.environment == 'dev', sourcemaps.write('.')))
		.pipe(gulp.dest(config[config.environment]))
		.pipe(browserSync.stream());
};

const scripts = function scripts() {
	return gulp.src(config.scripts.source)
		.pipe(plumber())
		.pipe(gulpif(config.environment == 'dev', sourcemaps.init()))
		.pipe(addStream.obj(prepareTemplates()))
		.pipe(concat('app.js'))
		.pipe(gulpif(config.environment == 'prod', ngannotate()))
		.pipe(gulpif(config.environment == 'prod', uglify()))
		.pipe(gulpif(config.environment == 'dev', sourcemaps.write('.')))
		.pipe(gulp.dest(config[config.environment]));
};

const lint = function lint() {
	return gulp.src(config.src + '/**/*.js')
		.pipe(plumber())
		.pipe(jshint(config.scripts.jshint))
		.pipe(jshint.reporter(stylish));
};

const runKarma = function runKarma(done) {
	new KarmaServer({
	  configFile: __dirname + '/karma.config.js'
	}, done).start();
};

const runProtractor = function runProtractor() {
	return gulp.src(config.test)
		.pipe(protractor({
			configFile: __dirname + '/protractor.config.js',
			args: ['--baseUrl', 'http://localhost:5000']
		}));
};

const serve = function serve() {
	browserSync.init({
		port: config.port,
		server: config[config.environment]
	});

	gulp.watch(config.src + '/**/*.scss', ['styles']);
	gulp.watch(config.src + '/**/*.js', ['scripts', browserSync.reload]);
	gulp.watch(config.src + '/**/*.html', ['indexTemplate', 'scripts', browserSync.reload]);
};

const clean = function clean(error) {
	rimraf(config[config.environment], error);
};

const build = function build() {
	sequence('clean', ['scripts', 'styles', 'indexTemplate']);
};

gulp.task('lint', lint);
gulp.task('karma', runKarma);
gulp.task('protractor', ['serve'], runProtractor);

gulp.task('clean', clean);
gulp.task('styles', styles);
gulp.task('scripts', ['lint'], scripts);
gulp.task('indexTemplate', indexTemplate);
gulp.task('build', build);
gulp.task('serve', ['build'], serve);

gulp.task('default', ['serve']);
