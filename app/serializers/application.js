import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  /**
   * Let know EmberData how to find the proper keys of the models.
   *
   * @param  {String} attr
   * @return {String}
   */
  keyForAttribute: function(attr) {
    return attr.underscore();
  }
});