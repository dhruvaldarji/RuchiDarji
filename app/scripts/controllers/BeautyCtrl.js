'use strict';

/**
 * @ngdoc function
 * @name app.controller:BeautyCtrl
 * @description
 * # BeautyCtrl
 */
angular.module('app')
    .controller('BeautyCtrl', BeautyCtrl);

    BeautyCtrl.$inject = ['$scope'];

    function BeautyCtrl($scope) {
        $scope.currentNavItem = 'Home';
    };
