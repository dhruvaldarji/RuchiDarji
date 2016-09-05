(function () {
    'use strict';

    angular
        .module('app')
        .controller('controller_scope', controller_scope);

    controller_scope.$inject = ['$scope']; 

    function controller_scope($scope) {
        $scope.title = 'controller_scope';

        activate();

        function activate() { }
    }
})();
