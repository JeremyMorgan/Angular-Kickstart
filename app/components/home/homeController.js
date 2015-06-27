(function () {
    'use strict';
    var controllerId = 'pageController';
    angular.module('angularstrapControllers', []).controller(controllerId, ["$scope", "$http", "$window", "$q",

        /**
         * Primary entry point for application
         * @param {array} [scope] The global scope for Angular
         * @param {object} [http] Http object (not in use)
         * @param {object} [q] Queing object
         * @param {object} [asyncService] our async service for http calls
         * @param {string} [APIHOST] constant for pointing to REST server
         *
         */
//            function pageController($scope, $http, $window, $q, asyncService, APIHOST) {
            function pageController($scope, $http, $window, $q) {

            var vm = this;

            //services
            //vm.angularstrapService = asyncService;

            //properties
            // vm.APIHost = APIHOST;
            vm.heroHeading = "Hello, World!";
            vm.heroText = "This is the AngularStrap home page. This text is being pulled from the pageController object, and can be populated by hand coding the property in the controller, dynamically or via services.";

            vm.col0heading = "Subsections";
            vm.col0text = "I may populate this with a microservice! Or have this be a separate view. This template uses Angular UI Writer which is better than using the Angular router in my opinion.";

            function reloadPage() {
                $window.location.reload();
            }
        }
    ]);
})();