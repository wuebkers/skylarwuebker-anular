(function() {
	'use strict';

	/**
	 * @ngdoc directive
	 * @name template
	 * @module app.common
	 * @restrict A
	 * @requires $templateCache
	 * @description
	 *
	 * Generic template include functionality
	 * Root directory for templates is `layouts`
	**/
	angular
		.module('app.common')
		.directive('template', template);

	/* @ngInject */
	function template($compile, $templateCache) {
		return {
			restrict: 'A',
			link: function (scope, element, attribute) {
				var html = $templateCache.get(attribute.template + '.html');
				if (html){
					// show template
					element.html(html).show();
					// compile scope
					$compile(element.contents())(scope);
				}
			}
		};
	}


}());
