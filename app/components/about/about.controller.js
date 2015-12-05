(function () {
    'use strict';

    angular.module('angularstrapApp')
        .controller('aboutController', aboutController);

    aboutController.$inject = ["$scope", "$http", "$window", "$q", "asyncService"];

    function aboutController($scope, $http, $window, $q, asyncService) {

        var vm = this;

        vm.Heading = "About Page";
        vm.Text = "This is a sample about page.";

        return vm;
    }
})();