angular.module('angularstrapApp')
    .directive('heroBlock', function() {
        return {
            templateUrl: '/app/components/home/views/heroblock.view.html'
        };
    })
    .directive('subSection', function() {
        return {
            templateUrl: '/app/components/home/views/subsection.view.html'
        };
});