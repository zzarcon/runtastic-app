/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    host: "https://intense-bastion-3210.herokuapp.com",
    modulePrefix: 'runtastic-app',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {}
    },
    APP: {},
    //Allow all
    contentSecurityPolicy: {
      'img-src': "* 'self' 'unsafe-inline'",
      'connect-src': "*",
      'style-src': "* 'self' 'unsafe-inline'",
      'report-uri': "*",
      'script-src': "* 'self' 'unsafe-inline' 'unsafe-eval'",
      'font-src': "* 'self' 'unsafe-inline' 'unsafe-eval'"
    }
  };

  if (environment === 'development') {

  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};