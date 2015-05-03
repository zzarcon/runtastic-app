import Ember from 'ember';

export default Ember.View.extend({
  removeLoader: function() {
    $('#app-loader').remove();
  }.on('didInsertElement')
});