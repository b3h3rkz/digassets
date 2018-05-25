var BitnobApp = angular.module('BitnobApp', [
    "ui.router",
    "ui.bootstrap",
    "oc.lazyLoad",
    "ngSanitize"
]);

/* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
BitnobApp.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        // global configs go here
    });
}]);

/* Setup Rounting For All Pages */
BitnobApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    // Redirect any unmatched url
    $urlRouterProvider.otherwise("/");

    $stateProvider.state('home', {
        url: '/',
        controllerAs: 'vm',
        controller: 'CoinListController',
        templateUrl: 'app/views/coin/list.html',
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'BitnobApp',
                    insertBefore: '#ng_load_plugins_before',
                    files: [
                        'app/controllers/CoinListController.js', /*Route with respect to index.html file*/
                        'app/services/Request.js'
                    ]
                });
            }]
        }
    });

    $stateProvider.state('add', {
        url: '/add',
        controllerAs: 'vm',
        controller: 'CoinAddController',
        templateUrl: 'app/views/coin/add.html',
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'BitnobApp',
                    insertBefore: '#ng_load_plugins_before',
                    files: [
                        'app/controllers/CoinAddController.js', /*Route with respect to index.html file*/
                        'app/services/Request.js'
                    ]
                });
            }]
        }

    });

    $stateProvider.state('detail', {
        url: '/detail',
        controllerAs: 'vm',
        controller: 'CoinDetailController',
        templateUrl: 'app/views/coin/detail.html',
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'BitnobApp',
                    insertBefore: '#ng_load_plugins_before',
                    files: [
                        'app/controllers/CoinDetailController.js', /*Route with respect to index.html file*/
                        'app/services/Request.js'
                    ]
                });
            }]
        }

    });

//about router
    $stateProvider.state('about', {
        url: '/about',
        controllerAs: 'vm',
        controller: 'StaticPagesController',
        templateUrl: 'app/views/main/about.html',
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'BitnobApp',
                    insertBefore: '#ng_load_plugins_before',
                    files: [
                        'app/controllers/StaticPagesController.js', /*Route with respect to index.html file*/
                        'app/services/Request.js'
                    ]
                });
            }]
        }

    });

 //careers router
    $stateProvider.state('careers', {
        url: '/careers',
        controllerAs: 'vm',
        controller: 'StaticPagesController',
        templateUrl: 'app/views/main/careers.html',
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'BitnobApp',
                    insertBefore: '#ng_load_plugins_before',
                    files: [
                        'app/controllers/StaticPagesController.js', /*Route with respect to index.html file*/
                        'app/services/Request.js'
                    ]
                });
            }]
        }

    });

}]);

// Handle global LINK click
BitnobApp.directive('a', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attrs) {
            if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
                elem.on('click', function(event) {
                    event.preventDefault(); // prevent link click for above criteria
                });
            }
        }
    };
});


var routeApp = angular.module("routeApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/detail", {
        templateUrl: "app/views/coin/detail.html"
    })
});
