var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('HeaderController', ['$scope', function ($scope) {
    $scope.upgradeAccount = 'Upgrade account';
    $scope.manageAccount = 'Manage account';
    $scope.logOut = 'Log out';
    $scope.student = {
        firstName: "Maciej",
        lastName: "Kamela",
        fees: 500,

        subjects: [
            {name: 'Physics', marks: 70},
            {name: 'Chemistry', marks: 80},
            {name: 'Math', marks: 65},
            {name: 'English', marks: 75},
            {name: 'IT', marks: 67}
        ],

        fullName: function () {
            var studentObject;
            studentObject = $scope.student;
            return studentObject.firstName + " " + studentObject.lastName;
        }
    };
}]);

