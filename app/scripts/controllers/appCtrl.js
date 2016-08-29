'use strict';

/**
 * @ngdoc function
 * @name app.controller:AppCtrl
 * @description
 * # AppCtrl
 */
angular.module('app')
    .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$scope'];

    function AppCtrl($scope) {
        $scope.currentNavItem = 'Home';
    };
