// An example configuration file.
exports.config = {
  // Framework to use. Jasmine is recommended.
  framework: 'mocha',

  scripts:{
    'test':'mocha ./test/supertest.test.js',
  }

};
