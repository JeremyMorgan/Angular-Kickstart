(function () {
    'use strict';
    var serviceId = 'asyncService';

    angular.module('angularKickstartServices', []).service(serviceId,
        ['$http', '$q', function asyncService($http, $q) {
            
            var factory = {
                //properties
                retrievedData: [],
                preparedData: [],
                getHeroText : getHeroText
            };

            function getHeroText(APIHOST) {
            
                factory.retrievedData = {HeroHeader:"Header", HeroText:"ssdsd"};
                factory.retrievedData.pageHeader = "About this App";
                factory.retrievedData.pageText = "This is a totally new page";
                //console.log("at return: " + JSON.stringify(factory.retrievedData));
            }
            return factory;
        }]);
})();