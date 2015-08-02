/**
 * Load modules for application
 */
var angularKickstartApp = angular.module('angularKickstartApp', ['ui.router', 'angularKickstartControllers', 'angularKickstartServices']);

// set our API host
angularKickstartApp.constant('APIHOST', 'http://localhost:12017');
