import Ember from "ember";

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