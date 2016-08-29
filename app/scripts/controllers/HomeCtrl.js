'use strict';

/**
 * @ngdoc function
 * @name app.controller:HomeCtrl
 * @description
 * # HomeCtrl
 */
angular.module('app')
    .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope'];

    function HomeCtrl($scope) {
        $scope.currentNavItem = 'Home';
    };
