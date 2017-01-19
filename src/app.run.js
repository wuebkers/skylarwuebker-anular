(function() {
	'use strict';

	/**
	 * @ngdoc overview
	 * @name run
	 * @description
	 *
	 * Main application run function
	 *
	**/
	angular
		.module('app')
		.run(run);

		/* @ngInject */
		function run($rootScope, MetaService) {
			$rootScope.MetaService = MetaService;

			$rootScope.$on('$stateChangeSuccess', function() {
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			});
		}

}());
