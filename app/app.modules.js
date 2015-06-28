/**
 * Load modules for application
 */
var angularstrapApp = angular.module('angularstrapApp', ['ui.router', 'angularstrapControllers', 'angularstrapServices']);

angularstrapApp.constant('APIHOST', 'http://localhost:12017');
