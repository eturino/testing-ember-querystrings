import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'team'],
  page: 1,
  team: 'SP'

});
