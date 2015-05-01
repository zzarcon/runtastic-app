import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('sessions');
  this.route('session', {path: 'sessions/:session_id'});
});
