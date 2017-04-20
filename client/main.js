import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session';

import {onAuthChange, routes} from '../imports/routes/routes';
import '../imports/startup/simpl-schema-configuration.js';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
