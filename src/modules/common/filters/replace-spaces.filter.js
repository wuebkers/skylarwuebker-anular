(function() {
	'use strict';

	/**
	 * @ngdoc filter
	 * @name replaceSpaces
	 * @module app.common
	 * @description
	 *
	 * Downcases string and replaces spaces with dashes
	 *
	 * @example
		<example name="replace-spaces-filter" module="app.common">
			<file name="index.html">
				<p>{{ 'Replace the spaces' | replaceSpaces }}</p>
			</file>
		</example>
	**/
	angular
		.module('app.common')
		.filter('replaceSpaces', replaceSpaces);


	function replaceSpaces() {
		return function(input) {
			if(input) {
				return input.toLowerCase().replace(/\s+/g, '-');
			}
		};
	}


}());
