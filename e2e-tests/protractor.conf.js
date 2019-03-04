//jshint strict: false


exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  baseUrl: 'http://localhost:3000/',
  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['scenarios.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};