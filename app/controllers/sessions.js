import Ember from 'ember';
import SortableController from "../mixins/sortable-controller";

export default Ember.ArrayController.extend(SortableController, {
  queryParams: ['page'],
  page: 1,
  itemController: 'session',
  sortProperty: 'id',
  secondarySortProperty: 'id',
  sortAscending: true,

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
        pages.push({index: tentativePage});
      }
    }

    pages.push({index: page, isActive: true});

    while (nextPages) {
      tentativePage = page + 1;
      if (tentativePage >= availablePages) {
        nextPages = 0;
      } else {
        page++;
        pages.push({index: tentativePage});
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