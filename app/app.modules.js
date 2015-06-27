/**
 * Load initial modules for application
 */
var angularstrapApp = angular.module('angularstrapApp', ['ui.router', 'angularstrapControllers']);

angularstrapApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/404');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/components/home/homeView.html'
            })
            .state('404', {
                url: '/404',
                templateUrl: 'app/shared/404.html'
            })
            .state('about', {
                // we'll add another state soon
            });

}]);
