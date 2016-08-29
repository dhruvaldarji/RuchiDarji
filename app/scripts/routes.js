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
                // $urlRouterProvider.when('/', '/home');

                $stateProvider
                    .state('rd', {
                        resolve:{
                            log: function(){
                                return console.log('State: RD');
                            }
                        },
                        abstract: true,
                        defaultChild: 'app',
                        templateUrl: appDirectory + 'Shared/layout.html'
                    })
                    .state('rd.app', {
                        url: '/',
                        resolve:{
                            log: function(){
                                return console.log('State: APP');
                            }
                        },
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
                            // }
                        }
                    })
                    .state('rd.app.home', {
                        url: 'home',
                        resolve:{
                            log: function(){
                                return console.log('State: HOME');
                            }
                        },
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
                        resolve:{
                            log: function(){
                                return console.log('State: BEAUTY');
                            }
                        },
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
                        resolve:{
                            log: function(){
                                return console.log('State: BLOG');
                            }
                        },
                        parent: 'rd.app',
                        views: {
                            'body_view': {
                                templateUrl: appDirectory + 'Shared/body_views/blog.html',
                                controller: 'BlogCtrl'
                            }
                        }
                    })
                ;
            }
        ]);
})();
