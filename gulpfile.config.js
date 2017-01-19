const argv = require('yargs').argv;

module.exports = new function() {
	'use strict';

	if (argv.prod) {
		this.environment = 'prod';
	} else {
		this.environment = 'dev';
	}

	this.src = './src';
	this.dev = './dev';
	this.prod = './prod';
	this.test = './test';

	this.port = 5000;

	this.templateCache = {
		moduleName: 'app.templateCache',
		index: this.src + '/index.html',
		source: [
			this.src + '/modules/**/*.html',
			this.src + '/layouts/**/*.html'
		]
	};

	this.styles = {
		source: this.src + '/**/*.scss',
		browsers: [
			'last 2 versions',
			'ie >= 9'
		]
	};

	this.scripts = {
		source: [
			// dependencies
			'node_modules/jquery/dist/jquery.js',
			'node_modules/lodash/lodash.js',
			'node_modules/angular/angular.js',
			'node_modules/angular-ui-router/release/angular-ui-router.js',

			// main app module
			this.src + '/app.module.js',
			this.src + '/app.config.js',
			this.src + '/app.run.js',
			this.src + '/app.routes.js',

			// templateCache module
			this.src + '/templateCache.module.js',

			// common module
			this.src + '/modules/common/common.module.js',
			this.src + '/modules/common/factories/meta.factory.js',
			this.src + '/modules/common/directives/template.directive.js',
			this.src + '/modules/common/directives/back.directive.js',
			this.src + '/modules/common/filters/replace-spaces.filter.js',

			// home module
			this.src + '/modules/home/home.module.js',
			this.src + '/modules/home/home.controller.js'
		],
		jshint: {
			lookup: true,
			browser: true,
			devel: true,
			esversion: 6
		}
	};
};
