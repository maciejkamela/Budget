var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('HeaderController', ['$scope', function ($scope) {
    $scope.headerMenu = [
        {
            'name': 'Log out',
            'class': 'log-out'
        },
        {
            'name': 'Manage account',
            'class': 'manage-account'
        },
        {
            'name': 'Upgrade account',
            'class': 'upgrade-account'
        }
    ];
    $scope.navigationBtns = [
        {   'name': 'Info',
            'class': 'btn btn-default navigation-btn info-btn',
            'route': 'dupa.api',
            'spanClass': 'fa fa-info'
        },
        {   'name': 'Tools',
            'class': 'btn btn-default navigation-btn tool-btn',
            'route': 'dupa.api',
            'spanClass': 'glyphicon glyphicon-wrench'
        },
        {   'name': 'Reports',
            'class': 'btn btn-default navigation-btn report-btn',
            'route': 'dupa.api',
            'spanClass': 'fa fa-pie-chart'
        },
        {   'name': 'Budget',
            'class': 'btn btn-default navigation-btn budget-btn',
            'route': 'dupa.main',
            'spanClass': 'fa fa-calculator'
        }
    ];
    $scope.activeIndex = 0;

    $scope.setCurrentIndex = function (index) {
        $scope.activeIndex = index;
    }

}]);

mainControllers.controller('StudentController', ['$scope', function ($scope) {
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
