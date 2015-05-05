import Ember from "ember";

/**
 * Renders a table head that fires an event when it's clicked and changes the
 * sortproperties of a controller that implements the "SortableController" Mixin
 */
export default Ember.Component.extend({
  action: 'sort',
  sortDirection: Ember.computed.alias('targetObject.sortAscending'),
  sortProperty: Ember.computed.alias('targetObject.sortProperty'),
  tagName: 'th',
  sortBy: null,
  ascending: true,

  active: function() {
    return this.get('sortProperty') === this.get('sortBy');
  }.property('sortProperty'),

  click: function(){
    this.sendAction('action', this.get('sortBy'), this.get('ascending') !== "false");
  }
});