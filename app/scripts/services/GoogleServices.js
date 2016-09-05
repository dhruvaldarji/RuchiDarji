
(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:googleService
     * @description
     * # googleService
     */
    angular
        .module('app')
        .factory('googleService', googleService);

    googleService.$inject = ['$http', '$q'];

    function googleService($http, $q) {
        var service = {
            getAPI: googleApiClientReady
        };

        return service;

        function googleApiClientReady() {
            var deferred = $q.defer();
            if(gapi.client){
                gapi.client.setApiKey('AIzaSyA7Dc2LvJDnC6l9OWuyLBS8bZz0GhBPZ_I');
                gapi.client.load('youtube', 'v3', function() {
                    var request = gapi.client.youtube.search.list({
                        part: 'snippet',
                        channelId: 'UCOg-E5sGR49InH9iGeBENuw',
                        order: 'date',
                        type: 'video'
                    });
                    request.execute(function(response) {
                        deferred.resolve(response.result);
                    });
                });
            }
            else {
                deferred.resolve(null);
            }

            return deferred.promise;
        };
    }
})();
