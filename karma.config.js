module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
			'node_modules/angular/angular.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'./src/app.module.js',
			'./src/app.config.js',
			'./src/app.run.js',
			'./src/app.routes.js',
			'./src/modules/**/*.module.js',
			'./src/modules/**/*.factory.js',
			'./src/modules/**/*.filter.js',
			'./src/modules/**/*.controller.js',
			'./src/**/*.spec.js'
		],
		exclude: [
		],
		preprocessors: {
		},
		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['PhantomJS'],
		singleRun: false,
		concurrency: Infinity
	})
}
