exports.config = {
	specs: __dirname + '/e2e/**/*.spec.js',
	rootElement: 'html',
	capabilities: {
		browserName: 'chrome',
		shardTestFiles: false,
		maxInstances: 1,
		exclude: []
	},
	framework: 'jasmine',
	jasmineNodeOpts: {
	  showColors: true,
	  defaultTimeoutInterval: 30000
	},
	onPrepare: function() {
		browser.driver.manage().window().setSize(1200, 800);
	}
};
