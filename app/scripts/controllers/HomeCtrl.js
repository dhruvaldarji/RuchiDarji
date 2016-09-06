'use strict';

/**
 * @ngdoc function
 * @name app.controller:HomeCtrl
 * @description
 * # HomeCtrl
 */
angular.module('app')
    .controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$scope', '$window', '$sce', 'googleService', '$timeout'];

function HomeCtrl($scope, $window, $sce, googleService, $timeout) {
    $scope.Ready = false;

    $scope.init = function() {
        googleService.getAPI().then(function(data) {
            $scope.youtube = data;
            if ($scope.youtube && $scope.youtube.items) {
                $scope.youtube.items.forEach(function(item) {
                    if (item) {
                        if (item.id && item.id.videoId) {
                            item.videoUrl = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + item.id.videoId);
                        } else {
                            item.videoId = '';
                        }

                        if (item.snippet) {
                            if (item.snippet.publishedAt) {
                                item.snippet.date = new Date(item.snippet.publishedAt.toLocaleString());
                            }
                        }
                    }
                });
            }
            $scope.Ready = true;
        }, function(error) {
            console.log('Failed: ' + error);
            $scope.Ready = true;
        });
    };

    if ($window.gapi.client) {
        $scope.init();
    } else {
        $timeout(function() {
            $scope.init();
        }, 500);
    }

};
