var app = angular.module('angularjs-starter', []);

app.controller('MainCtrl', function($scope) {
   $scope.submitForm = function () {
   $scope.submission = true
   };
});