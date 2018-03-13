angular.module('BitnobApp').controller('CoinDetailController', function ($scope) {
    $scope.title = "Bitnob Info";
    $scope.name = [
        {fname:"rele", lname:"babatunde", uname:"rele"},
        {fname:"Karim", lname:"benzema", uname:"yawa_player"},
        {fname:"cris", lname:"ronaldo", uname:"killer"},
        {fname:"daal", lname:"naapo", uname:"for_girls"},
        {fname:"ben", lname:"note2", uname:"bread"},
        {fname:"naa", lname:"bae", uname:"obaasima"}
    ];

    $scope.number = function () {
        for (i=1; i>name.length; i++) {
            return i;
        }
        return i;
    };
});