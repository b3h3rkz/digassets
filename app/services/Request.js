angular.module('BitnobApp').service('Request', function ($http) {
    var BASE_URL = "";

    this.post = function (url, data, callback) {
        return $http({
            method: "POST",
            url: BASE_URL + url,
            data: data
        }).then(function (res) {
            callback(res);
        }, function (res) {
            callback(res);
        });
    }

    this.update = function (url, data, callback) {
        return $http({
            method: "PUT",
            url: BASE_URL + url,
            data: data
        }).then(function (res) {
            callback(res);
        }, function (res) {
            callback(res);
        });
    }

    this.get = function (url, callback) {
        return $http({
            method: "GET",
            url: BASE_URL + url,
            data: data
        }).then(function (res) {
            callback(res);
        }, function (res) {
            callback(res);
        });
    }

    this.delete = function (url, callback) {
        return $http({
            method: "DELETE",
            url: BASE_URL + url,
            data: data
        }).then(function (res) {
            callback(res);
        }, function (res) {
            callback(res);
        });
    }

    return this;
});