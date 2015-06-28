(function () {
    'use strict';
    var controllerId = 'pageController';
    angular.module('angularstrapControllers', []).controller(controllerId, ["$scope", "$http", "$window", "$q", "asyncService",

        /**
         * Primary entry point for application
         * @param {array} [scope] The global scope for Angular
         * @param {object} [http] Http object (not in use)
         * @param {object} [q] Queing object
         * @param {object} [asyncService] our async service for http calls
         * @param {string} [APIHOST] constant for pointing to REST server
         *
         */
          function pageController($scope, $http, $window, $q, asyncService, APIHOST) {

            var vm = this;

            //services
            vm.angularstrapService = asyncService;

            //properties
            vm.APIHost = APIHOST;

            // get our hero text
            asyncService.getHeroText(APIHOST);

            vm.heroHeading = asyncService.retrievedData.HeroHeader;
            vm.heroText = asyncService.retrievedData.HeroText;

            vm.col0heading = "Subsections";
            vm.col0text = "I may populate this with a microservice! Or have this be a separate view. This template uses Angular UI which is better than using the Angular router in my opinion.";

            function reloadPage() {
                $window.location.reload();
            }
        }
    ]);
})();