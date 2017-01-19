'use strict';

var MetaService;

describe('MetaService', function() {

	beforeEach(module('app.common'));
	beforeEach(inject(dependencies));

	it('should exist', function() {
		expect(MetaService).toBeDefined();
	});

	it('should return the page title', function() {
		MetaService.setTitle('Home');
		expect(MetaService.title()).toBe('Home | Angular Starterkit');
	});

});

function dependencies(_MetaService_) {
	MetaService = _MetaService_;
}
