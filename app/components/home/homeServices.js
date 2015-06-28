(function () {
    'use strict';
    var serviceId = 'asyncService';

    angular.module('angularstrapServices', []).service(serviceId,
        ['$http', '$q', function asyncService($http, $q) {
            var factory = {
                //properties
                retrievedData: [],
                preparedData: [],
                getHeroText : getHeroText
            };

            function getHeroText(APIHOST) {

                var deferred = $q.defer();

                /*$http.get(APIHOST + "/HeroText", [])
                    .success(function (data) {
                        factory.retrievedData = data;
                        deferred.resolve();
                    }).error(function () {
                        deferred.reject();
                    });*/

                factory.retrievedData = {HeroHeader:"", HeroText:""};
                factory.retrievedData.HeroHeader = "Hello World!";
                factory.retrievedData.HeroText = "This is the AngularStrap home page. This text is being pulled from a service, and can be populated by hand coding the property in the controller, dynamically or via services.";

                //console.log("at return: " + JSON.stringify(factory.retrievedData));
                return deferred.promise;
            }
            return factory;
        }]);
})();