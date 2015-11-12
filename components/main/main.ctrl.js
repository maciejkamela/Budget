var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('HeaderController', function ($scope) {
        $scope.upgradeAccount = 'Upgrade account';
        $scope.manageAccount = 'Manage account';
        $scope.logOut = 'Log out';
    });