/**
 * Load states for application
 * more info on UI-Router states can be found at
 * https://github.com/angular-ui/ui-router/wiki
 */
angularstrapApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/404');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/components/home/homeView.html',
            controller: 'pageController',
            controllerAs: 'ctrl'
        })
        .state('404', {
            url: '/404',
            templateUrl: 'app/shared/404.html'
        })
        .state('about', {
            // we'll add another state soon
        });
}]);