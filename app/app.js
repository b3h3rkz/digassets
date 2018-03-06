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