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
    //  APIHost: 'http://localhost:12017'
    //  APIHost: 'http://RGSWEB01:9999'
    //  APIHost: 'http://RG-P-BLU1:9999'
    //  APIHost: 'http://dev01jmorg01/api'
});
