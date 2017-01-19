(function() {
	'use strict';

	/**
	 * @ngdoc module
	 * @name app
	 * @description
	 *
	 * Main application module
	 *
	**/
	angular
		.module('app', [
			'ui.router',
			'app.templateCache',
			'app.common',
			'app.home'
		]);

}());
