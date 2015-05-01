import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['page'],
  page: 1,
  itemController: 'session',

  availablePages: Ember.computed.alias('pagination.available_pages'),

  nearPages: function() {
    var previousPages, nextPages, tentativePage;
    var pages = [];
    var total = 10;
    var page = this.get('page');
    var availablePages = this.get('availablePages');

    previousPages = nextPages = (total / 2) - 1;

    while (previousPages) {
      tentativePage = page - previousPages;
      previousPages--;

      if (tentativePage >= 1) {
        pages.push(tentativePage);
      }
    }

    pages.push(page);

    while (nextPages) {
      tentativePage = page + 1;
      if (tentativePage >= availablePages) {
        nextPages = 0;
      } else {
        page++;
        pages.push(tentativePage);
        nextPages--;
      }
    }

    return pages;
  }.property('page'),

  pagination: function() {
    var meta = this.get('store').metadataFor('runSession');
    if (!meta) {
      return;
    }

    return meta.pagination;
  }.property('this.length'),

  actions: {
    loadPage: function(direcction) {
      var page = typeof direcction === "number" ? direcction : this.get('page') + (direcction === 'next' ? 1 : -1);
      this.set('page', page);
    }
  }
});