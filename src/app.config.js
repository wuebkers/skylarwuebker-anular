(function() {
	'use strict';

	/**
	 * @ngdoc overview
	 * @name config
	 * @description
	 *
	 * Main application configuration
	 *
	**/
	angular
		.module('app')
		.config(config);

		/* @ngInject */
		function config($locationProvider, $urlRouterProvider) {
			$locationProvider.html5Mode(true);
			$urlRouterProvider.otherwise('/');
		}

}());
