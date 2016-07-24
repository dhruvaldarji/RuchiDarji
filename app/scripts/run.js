(function() {
    'use strict';

    angular.module('app')
        .run(run);

    run.$inject = ['$rootScope', '$state'];

    function run($rootScope, $state) {

        $rootScope.$on('$stateChangeError', console.log.bind(console));

        // Anytime the state changes, we check if the user is authorized, if there are not, we send them to login.
        $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
            $rootScope.toState = toState;
            $rootScope.toStateParams = toStateParams;
        });

        // If we can't find the state, default to 404
        $rootScope.$on('$stateNotFound', function(event) {});

        $rootScope.$on('$stateChangeSuccess', function(event, to, toParams, from, fromParams) {
            //save the previous state in a rootScope variable so that it's accessible from everywhere
            $rootScope.stateEvent = event;
            $rootScope.previousState = from;
            $rootScope.previousStateParams = fromParams;
            $rootScope.toState = to;
            $rootScope.toStateParams = toParams;

            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });

    }

})();
