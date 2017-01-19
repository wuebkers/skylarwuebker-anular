var utility = require('../utility.js');
var po = utility.po;

describe('the home page', function() {

	beforeEach(function() {
		utility.init(utility.routes.home)
	});

	it('should display a title that says Hello World!', function() {
		expect(po.home.title.getText()).toBe('Hello World!');
	});

});
