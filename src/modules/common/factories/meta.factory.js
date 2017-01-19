(function() {
	'use strict';

	/**
	 * @ngdoc service
	 * @name MetaService
	 * @module app.common
	 * @description
	 *
	 * Handles aspects of assigning page titles per view
	 *
	 * @returns {Object} methods
	**/
	angular
		.module('app.common')
		.factory('MetaService', MetaService);

		/* @ngInject */
		function MetaService($rootScope) {
			var viewTitle;

			var service = {
				title: title,
				setTitle: setTitle
			};

			return service;

			/**
			 * @ngdoc method
			 * @name MetaService#title
			 * @description
			 *
			 * Sets up base page title
			 *
			 * @returns {String} base page title
			**/
			function title() {
				return viewTitle;
			}

			/**
			 * @ngdoc method
			 * @name MetaService#setTitle
			 * @description
			 *
			 * Allows assignment of unique page titles per controller/view
			 *
			 * @param {String} titleAddition example: `'Home'`
			 * @returns {String} example: `'Home | Angular Starterkit'`
			**/
			function setTitle(titleAddition) {
				var defaultTitle = 'Angular Starterkit';

				if(titleAddition) {
					viewTitle = titleAddition + ' | ' + defaultTitle;
				} else {
					viewTitle = defaultTitle;
				}
			}
		}

}());
