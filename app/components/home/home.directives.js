angular.module('angularstrapApp')
    .directive('heroBlock', function() {
        return {
            templateUrl: 'http://jeremymorgan.github.io/Angular-Kickstart/app/components/home/views/heroblock.view.html'
        };
    })
    .directive('subSection', function() {
        return {
            templateUrl: 'http://jeremymorgan.github.io/Angular-Kickstart/app/components/home/views/subsection.view.html'
        };
});