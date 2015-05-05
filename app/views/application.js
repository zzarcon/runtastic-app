import Ember from 'ember';

export default Ember.View.extend({
  /**
   * Doing this little trick, the user have feedback since the moment 0.
   * See "index.html" to see the loader markup
   *
   * @return {void}
   */
  removeLoader: function() {
    $('#app-loader').remove();
  }.on('didInsertElement')
});