import Ember from 'ember';

export default Ember.Route.extend({
  //Redirect to default route
  redirect: function() {
    this.transitionTo('sessions');
  }
});