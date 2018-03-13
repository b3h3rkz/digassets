angular.module('BitnobApp')
    .controller('CoinListController', function ($scope, $http) {
        $scope.lists = [];
        $http.get('data.json').then(function(response){
            $scope.lists = response.data;
        },function (error) {
            $scope.error = error;
        })
    })
  