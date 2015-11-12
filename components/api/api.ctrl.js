var apiControllers = angular.module('apiControllers', []);

apiControllers.controller('MoviesController', ['$scope', '$http', function ($scope, $http) {
    var url = 'http://localhost:3000/movies';
    $http.get(url).success(function (data) {
        $scope.movies = data.records;
    });
}]);