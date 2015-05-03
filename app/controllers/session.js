import Ember from 'ember';
var dateFormat = 'DD.MM.YYYY, HH.mm';

export default Ember.Controller.extend({
  startDate: function() {
    return moment(this.get('model.startTime')).format(dateFormat);
  }.property('model.startTime'),

  endDate: function() {
    return moment(this.get('model.endTime')).format(dateFormat);
  }.property('model.endTime'),

  distanceKm: function() {
    return Math.round((this.get('model.distance') / 1000) * 100) / 100 + ' Km';
  }.property('model.distance'),

  durationHours: function() {
    return Math.round(moment.duration(this.get('model.duration')).asHours() * 100) / 100+ ' H';
  }.property('model.duration')
});