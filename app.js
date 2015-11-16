//'use strict';
//
///* App Module */
//var myApp = angular.module("myApp", [
//    'ngRoute',
//    'apiControllers',
//    'mainControllers'
//]);
//
//myApp.config(['$routeProvider', function ($routeProvider) {
//    $routeProvider.
//        when('/movies', {
//        templateUrl: 'components/api/api.html',
//        controller: 'MoviesController'
//    }).
//        when('/main', {
//            templateUrl: 'components/main/main.html',
//            controller: 'HeaderController'
//        }).
//    otherwise({
//        redirectTo: '/main'
//    })
//}]);
var myApp = angular.module('myApp', [
    "ui.router",
    'apiControllers',
    'mainControllers'
]);
myApp.config(function ($stateProvider) {
    $stateProvider
        .state('main', {
            url: "",
            views: {
                "mainView": {
                    templateUrl: "components/main/main.html",
                    "controller": "HeaderController"
                },
                sidebarView: {
                    templateUrl: "components/main/sidebar.html",
                    "controller": "StudentController"
                }
            }
        })
        .state('api', {
            url: "/api",
            views: {
                "apiView": {
                    templateUrl: "components/api/api.html",
                    controller: "MoviesController"
                },
                "mainView": {
                    templateUrl: "components/main/main.html",
                    "controller": "HeaderController"
                }
            }
        })
});
