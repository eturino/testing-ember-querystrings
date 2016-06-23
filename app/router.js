import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('articles');
  this.route('client', function() {
    this.route('team', function() {
      this.route('time', { path: 'time/:timeString' });
    });
  });
});

export default Router;
