import Ember from "ember";

export default Ember.Mixin.create({
  sortProperty: '',
  secondarySortProperty: '',
  sortAscending: true,

  sortProperties: function() {
    return [this.get('sortProperty'), this.get('secondarySortProperty')];
  }.property('sortProperty', 'secondarySortProperty', 'sortAscending'),

  sortPropertyClass: function() {
    //Dasherize all instances in the sortProperty
    return this.get('sortProperty').dasherize().replace(/\./g, '-');
  }.property('sortProperty'),

  actions: {
    sort: function(name, ascending) {
      if (this.get('sortProperty') === name) {
        this.toggleProperty('sortAscending');
      } else {
        this.set('sortProperty', name);
        this.set('sortAscending', ascending);
      }
    }
  }
});