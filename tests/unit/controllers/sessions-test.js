import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:sessions', {});

test('Should return the near pages based on the current page', function(assert) {
  var controller = this.subject();
  var currentPage = 6;

  controller.set('page', currentPage);
  controller.set('pagination', {});

  assert.ok(controller.get('nearPages.firstObject.index') === 2);
  assert.ok(controller.get('nearPages.lastObject.index') === 10);
});
