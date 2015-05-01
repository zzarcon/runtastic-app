import DS from "ember-data";
import Ember from 'ember';
import config from 'runtastic-app/config/environment';

export default DS.RESTAdapter.extend({
  host: config.host,

  buildURL: function(type, id) {
    id = id ? '/' + id : '';

    return this.get('host') + '/run_sessions' + id + '.json';
  }
});