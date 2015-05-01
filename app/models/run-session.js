import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
  startTime: attr('date'),
  endTime: attr('date'),
  duration: attr('number'),
  distance: attr('number'),
  encodedTrace: attr(),
  sportTypeId: attr('number')
});