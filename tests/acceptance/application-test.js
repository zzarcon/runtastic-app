import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'runtastic-app/tests/helpers/start-app';

var application;

module('Acceptance: Application', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('Check near pages', function(assert) {
  var activePage = 6;
  visit('/sessions?page=' + activePage);

  andThen(function() {
    var pages = find('ul.pagination li');

    assert.equal(pages.length, 11, "The pagination should contain all pages plus first and last");
    assert.equal(pages.filter(':first').text(), "First", "The first page should display 'first'");
    assert.equal(pages.filter(':last').text(), "Last", "The last page should display 'last'");
    assert.equal(pages.filter('.is-active').text(), activePage, "Should display as active the activePage");
  });
});
