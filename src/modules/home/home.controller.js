(function() {
	'use strict';

	angular
		.module('app.home')
		.controller('HomeController', HomeController);

	/* @ngInject */
	function HomeController(MetaService) {
		var vm = this;
		vm.hello = 'Hello World!';

		MetaService.setTitle('Home');
	}

}());
