
'use strict';

var HomePage = require('./page-objects/home.po.js');

module.exports = {

	po: {
		home: new HomePage()
	},

	routes: {
		home: '/'
	},

	init: function(route) {
		browser.ignoreSynchronization = true;
		browser.waitForAngular();
		browser.get(route);
	},

	waitForElement: function(element) {
		browser.wait(function() {
			return element.isPresent();
		}, 10000);
		browser.wait(function() {
			return element.isDisplayed();
		}, 10000);
	}

};
