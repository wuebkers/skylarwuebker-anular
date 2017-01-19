'use strict';

var controller;

describe('HomeController', function() {

	beforeEach(function() {
		module('app.home');
		module('app.common');
		inject(dependencies);
	});

	it('should display Hello World!', function() {
		expect(controller.hello).toBe('Hello World!');
	});

});

function dependencies(_$controller_) {
	controller = _$controller_('HomeController');
}
