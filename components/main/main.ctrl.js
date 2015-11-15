var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('HeaderController', ['$scope', function ($scope) {
    $scope.upgradeAccount = 'Upgrade account';
    $scope.manageAccount = 'Manage account';
    $scope.logOut = 'Log out';
    $scope.navigationBtns = {
        budget: 'Budget',
        reports: 'Reports',
        tools: 'Tools',
        info: 'Info',
        class: 'inactive',
        setActiveBtn: function () {
            if(this.class === 'inactive') {
                this.removeActiveClass();
                this.classList.add('active');
            } else {
                this.class = 'inactive'
            }
        },
        buttonsList: document.getElementsByClassName('btn'),
        removeActiveClass: function () {
            console.log(this.buttonsList);
            for (var j = 0; j < this.buttonsList.length; j++) {
                this.buttonsList[j].classList.remove('active');
            }
        }
    };

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
