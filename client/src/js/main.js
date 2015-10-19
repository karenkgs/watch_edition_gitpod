'use strict';

require('./../styles/main.scss');

var App = require('./app'),
  NotificationsForm = require('./framework/watchNotificationsForm'),
  notificationsFormConfig = require('./watch-notifications/watchNotificationsFormConfig');

var notificationsForm = new NotificationsForm();
notificationsForm.configureNotifications(notificationsFormConfig);

App.start();
