'use strict';

var $filter;

describe('replaceSpaces', function() {

	beforeEach(module('app.common'));
	beforeEach(inject(dependencies));

	it('should replace spaces with dashes and downcase letters', function() {
		expect($filter('Replace the spaces')).toBe('replace-the-spaces');
	});

});

function dependencies(_$filter_) {
	$filter = _$filter_('replaceSpaces');
}
