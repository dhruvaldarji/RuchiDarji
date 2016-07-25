'use strict';

/**
 * @ngdoc function
 * @name ruchiDarjiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ruchiDarjiApp
 */
angular.module('app')
    .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$scope'];

    function AppCtrl($scope) {
        $scope.currentNavItem = 'Home';
    };
