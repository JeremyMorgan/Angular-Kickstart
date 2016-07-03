(function () {
    'use strict';

    angular.module('angularstrapApp.homeServices', [])
        .service('asyncService', asyncService);

    asyncService.$inject = ['$http', '$q'];

    function asyncService($http, $q) {

        var factory = {
            //properties
            heroData: [],
            getHeroText: getHeroText,
            getColumnData: getColumnData
        };

        function getHeroText() {

            var defer = $q.defer()

            factory.heroData = {
                HeroHeader: "Hello AngularStrap!",
                HeroText: "This is the AngularStrap home page. This text is being pulled from a service, and can be populated by hand coding the property in the controller, dynamically or via services."
            };
            // this will always resolve because this is hardcoded
            defer.resolve();

            return defer.promise
        }

        function getColumnData(columnum) {

            var defer = $q.defer()

            $http({
                method: 'GET',
                url: "http://jsonplaceholder.typicode.com" + "/posts/" + columnum

            }).then(function successCallback(response) {
                defer.resolve(response.data);
            }, function errorCallback(response) {
                defer.reject(response);
            });

            return defer.promise
        }

        return factory;
    }
})();