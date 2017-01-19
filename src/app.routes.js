(function() {
	'use strict';

	/**
	 * @ngdoc overview
	 * @name routes
	 * @description
	 *
	 * Main application routes
	 *
	**/
	angular
		.module('app')
		.config(routes);

		/* @ngInject */
		function routes($stateProvider) {
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'home/home.html'
				});
		}

}());
