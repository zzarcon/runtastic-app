import Ember from 'ember';
import SortableController from "../mixins/sortable-controller";

/**
 * Uses SortableController for change the values of "sortProperties" and "sortAscending".
 * Also uses "queryParams" for reflect the current page on the browser url
 */
export default Ember.ArrayController.extend(SortableController, {
  queryParams: ['page'],
  page: 1,
  itemController: 'session',
  sortProperty: 'id',
  secondarySortProperty: 'id',
  sortAscending: true,
  loadingSessions: false,

  availablePages: Ember.computed.alias('pagination.available_pages'),

  /**
   * Returns the number of the near pages of the current page.
   *
   * Example: Current page == 6 should return [2,3,4,5,6,7,8,9,10]
   *
   * @return {Array}
   */
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
    /**
     * Changes the current page to "newPage".
     * Also admits "next" and "prev"
     *
     * @param  {Mixed} newPage String/Number
     * @return {void}
     */
    loadPage: function(newPage) {
      var page = typeof newPage === "number" ? newPage : this.get('page') + (newPage === 'next' ? 1 : -1);
      this.set('page', page);
    }
  }
});