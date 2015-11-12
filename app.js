'use strict';

/* App Module */
var myApp = angular.module("myApp", [
    'ngRoute',
    'apiControllers',
    'mainControllers'
]);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/movies', {
        templateUrl: 'components/api/api.html',
        controller: 'MoviesController'
    }).
        when('/main', {
            templateUrl: 'components/main/main.html',
            controller: 'HeaderController'
        }).
    otherwise({
        redirectTo: '/main'
    })
}]);
