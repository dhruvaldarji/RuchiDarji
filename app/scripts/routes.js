(function() {
    'use strict';

    /** UI Router CHEAT SHEET **/
    /** https://d2eip9sf3oo6c2.cloudfront.net/pdf/egghead-io-ui-router-cheat-sheet.pdf **/

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider',

            function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
                // Routes Stuff
                var appDirectory = 'views/';

                $urlMatcherFactoryProvider.caseInsensitive(true);

                // Default App redirects/corrections.
                $urlRouterProvider.when('', '/');
                $urlRouterProvider.when('/', '/home');

                $urlRouterProvider.otherwise('/home');

                $stateProvider
                    .state('rd', {
                        resolve: {},
                        abstract: true,
                        defaultChild: 'app',
                        templateUrl: appDirectory + 'Shared/layout.html'
                    })
                    .state('rd.app', {
                        url: '/',
                        resolve: {},
                        parent: 'rd',
                        defaultChild: 'home',
                        views: {
                            'appHeader': {
                                templateUrl: appDirectory + 'Shared/header.html'
                            },
                            'appBody': {
                                templateUrl: appDirectory + 'Shared/body.html'
                            },
                            // 'appFooter': {
                            //     templateUrl: appDirectory + 'Shared/footer.html'
                            // },
                            'sidebar': {
                                templateUrl: appDirectory + 'Shared/sidebar.html'
                            }
                        }
                    })
                    .state('rd.app.home', {
                        url: 'home',
                        resolve: {},
                        parent: 'rd.app',
                        views: {
                            'body_view': {
                                templateUrl: appDirectory + 'Shared/body_views/home.html',
                                controller: 'HomeCtrl'
                            }
                        }
                    })
                    .state('rd.app.beauty', {
                        url: 'beauty',
                        resolve: {},
                        parent: 'rd.app',
                        views: {
                            'body_view': {
                                templateUrl: appDirectory + 'Shared/body_views/beauty.html',
                                controller: 'BeautyCtrl'
                            }
                        }
                    })
                    .state('rd.app.blog', {
                        url: 'blog',
                        resolve: {},
                        parent: 'rd.app',
                        views: {
                            'body_view': {
                                templateUrl: appDirectory + 'Shared/body_views/blog.html',
                                controller: 'BlogCtrl'
                            }
                        }
                    });
            }
        ]);
})();
