(function() {
	'use strict';

	/**
	 * @ngdoc directive
	 * @name back
	 * @module app.common
	 * @restrict A
	 * @element button
	 * @description
	 *
	 * Generic back button functionality, returns user to previous state
	**/
	angular
		.module('app.common')
		.directive('back', back);

	/* @ngInject */
	function back($window) {
		return {
			restrict: 'A',
			link: function (scope, element, attribute) {
				element.bind('click', function () {
					$window.history.back();
				});
			}
		};
	}


}());
