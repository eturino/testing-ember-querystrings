import Ember from 'ember';

export default Ember.Route.extend({
    queryParams: {
      page: {
        refreshModel: true
      },
      team: {
        refreshModel: true
      }
    },

    model(params) {
      return [`With Page ${params.page}`, `For team ${params.team}`, 'Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
    },

    setupController(controller) {
      this._super(...arguments);
      let prps = { teams: ['UK', 'IT', 'SP', 'GE'] }
      controller.setProperties(prps);
    },

    actions: {
      changeTeam(e) {
        const $e = Ember.$(e.target);
        const team = $e.val();
        this.transitionTo({queryParams: {team: team, page: 1}});
      }
    }
});
