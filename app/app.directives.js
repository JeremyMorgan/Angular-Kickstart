angular.module('angularstrapApp')
    .directive('heroBlock', function() {
        return {
            templateUrl: '/app/components/home/heroblock.view.html'
        };
    })
    .directive('subSection', function() {
        return {
            templateUrl: '/app/components/home/subsection.view.html'
        };
});