import Ember from 'ember';

export default Ember.View.extend({
  elementId: "sessions-section",
  page: Ember.computed.alias('controller.page'),
  isFirstPage: Ember.computed.equal('page', 1),

  isLastPage: function() {
    return this.get('page') === this.get('controller.pagination.available_pages');
  }.property('controller.pagination.available_pages')
});