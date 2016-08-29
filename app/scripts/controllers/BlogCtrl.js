'use strict';

/**
 * @ngdoc function
 * @name app.controller:BlogCtrl
 * @description
 * # BlogCtrl
 */
angular.module('app')
    .controller('BlogCtrl', BlogCtrl);

    BlogCtrl.$inject = ['$scope'];

    function BlogCtrl($scope) {
        $scope.currentNavItem = 'Home';
    };
