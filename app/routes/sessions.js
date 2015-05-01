import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  model: function(params) {
    var page = params.page;

    return this.get('store').find('runSession', {page: page});
  }
});