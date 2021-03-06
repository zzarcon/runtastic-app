import Ember from 'ember';

export default Ember.View.extend({
  elementId: "session-section",

  encodedTrace: Ember.computed.alias('controller.model.encodedTrace'),

  drawMap: function() {
    if (!this.get('encodedTrace')) {
        return;
    }

    var decodedPath = google.maps.geometry.encoding.decodePath(this.get('encodedTrace'));
    var myOptions = {
        zoom: 15,
        center: decodedPath[0],
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(this.$('#map')[0], myOptions);

    new google.maps.Polyline({
        path: decodedPath,
        strokeColor: "#007AFF",
        strokeWeight: 4,
        map: map
    });
  }.on('didInsertElement')
});