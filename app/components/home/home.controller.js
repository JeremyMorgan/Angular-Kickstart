(function () {
    'use strict';

    angular.module('angularstrapApp')
        .controller('homeController', homeController);

    homeController.$inject = ["$scope", "$http", "$window", "$q", "asyncService"];

    function homeController($scope, $http, $window, $q, asyncService) {

        var vm = this;

        //services
        vm.angularstrapService = asyncService;

        // get our hero text (hardcoded) 
        asyncService.getHeroText()
            .then(function (data) {
                vm.HeroHeader = asyncService.heroData.HeroHeader;
                vm.HeroText = asyncService.heroData.HeroText;
            }, function (error) {
                vm.HeroHeader = "Error";
                vm.HeroText = error;
            });

        // real ajax calls
        asyncService.getColumnData(1)
            .then(function (data) {
                vm.col1heading = data.title;
                vm.col1text = data.body;
            }, function (error) {
                vm.col1heading = "Error";
                vm.col1text = error.statusText;
            });

        asyncService.getColumnData(2)
            .then(function (data) {
                vm.col2heading = data.title;
                vm.col2text = data.body;
            }, function (error) {
                vm.col2heading = "Error";
                vm.col2text = error.statusText;
            });

        asyncService.getColumnData(3)
            .then(function (data) {
                vm.col3heading = data.title;
                vm.col3text = data.body;
            }, function (error) {
                vm.col3heading = "Error";
                vm.col3text = error.statusText;
            });

        return vm;
    }
})();