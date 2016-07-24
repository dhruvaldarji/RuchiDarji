(function() {
    'use strict';

    /** UI Router CHEAT SHEET **/
    /** https://d2eip9sf3oo6c2.cloudfront.net/pdf/egghead-io-ui-router-cheat-sheet.pdf **/

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider',

            function($stateProvider, $urlRouterProvider) {
                // Routes Stuff
                var appDirectory = 'views/';

                // Default App redirects/corrections.
                $urlRouterProvider.when('', '/');

                $stateProvider
                    .state('rd', {
                        abstract: true,
                        defaultChild: '/',
                        templateUrl: appDirectory + 'Shared/layout.html'
                    })
                    .state('rd.app', {
                        url: '/',
                        abstract: false,
                        views: {
                            'appHeader': {
                                templateUrl: appDirectory + 'Shared/header.html'
                            },
                            'appBody': {
                                templateUrl: appDirectory + 'Shared/body.html'
                            },
                            'appFooter': {
                                templateUrl: appDirectory + 'Shared/footer.html'
                            }
                        }
                    })

                ;
            }
        ]);
})();
