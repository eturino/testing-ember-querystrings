import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel () {
    console.log("WAT");
    return this.transitionTo('client.team.time', 'last-30-days');
  },
});
