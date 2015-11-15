//myApp.directive('toggleClass', function() {
//    return {
//        restrict: 'AEC',
//        link: function(scope, element, attrs) {
//            element.bind('click', function() {
//                if(element.attr("class") == "active") {
//                    element.removeClass("active");
//                    element.addClass(attrs.toggleClass);
//                } else {
//                    element.removeClass("inactive");
//                    element.addClass("active");
//                }
//            });
//        }
//    };
//});
myApp.directive('toggleClass', function () {
    return {
        link: function (scope, element, attrs) {
            element.bind('click', function () {
                for (var i = 0; i < element.length; i++) {
                    console.log(element, scope, attrs, element.length);
                    if (element[i].hasClass('active')) {
                        element[i].removeClass('active');
                    }
                }
                element.addClass('active');
            })
        }
    };
});
