/**
 * Load modules for application
 */

angular
    .module('angularstrapApp', [
        'ui.router',
        'angularstrapServices',
        'angularstrapControllers'
    ]);

// set of config options stored in constant
angular.module('angularstrapApp')
    .constant('CONFIG', {
    DebugMode: true,
    StepCounter: 0,
    APIHost: 'http://localhost:12017'
});
