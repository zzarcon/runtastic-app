import Ember from 'ember';
var dateFormat = 'DD.MM.YYYY, HH.mm';

export default Ember.Controller.extend({
  startDate: function() {
    return moment(this.get('startTime')).format(dateFormat);
  }.property('startTime'),

  endDate: function() {
    return moment(this.get('endTime')).format(dateFormat);
  }.property('endTime')
});