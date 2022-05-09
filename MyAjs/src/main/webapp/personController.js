angular.module('myApp', []).controller('personCtrl', function($scope) {
    $scope.firstName = "Shivansh",
    $scope.lastName = "singh",
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    }
});