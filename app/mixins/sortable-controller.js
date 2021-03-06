import Ember from "ember";

/**
 * Implements the logic for change the properties related to sorting of the Controller that
 * uses it.
 */
export default Ember.Mixin.create({
  sortProperty: '',
  secondarySortProperty: '',
  sortAscending: true,

  sortProperties: function() {
    return [this.get('sortProperty'), this.get('secondarySortProperty')];
  }.property('sortProperty', 'secondarySortProperty', 'sortAscending'),

  /**
   * It's util for reflect the current sortProperty as html class.
   * @return {String}
   */
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