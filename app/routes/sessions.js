import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  model: function(params) {
    var page = params.page;
    var controller = this.get('controller');
    var model = this.get('store').find('runSession', {page: page});

    if (controller) {
      controller.set('loadingSessions', true);
      model.then(function() {
        controller.set('loadingSessions', false);
      });
    }

    return model;
  }
});