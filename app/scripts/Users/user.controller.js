;(function() {
  
    'use strict';

  angular.module('Vehicles',['ngRoute', 'ngCookies'])

  .controller('UserCtrl', ['$scope', 'UserFactory', '$location',
    function ($scope, UserFactory, $location) {
      var user = UserFactory.user();
      if (user) {
        return $location.path('/');
      }

      //add a new user//
      $scope.registerUser = function (userObj) {
        UserFactory.register(userObj);
      }

      //login method//
      $scope.loginUser = function (userObj) {
        UserFactory.login(userObj);
      };
    }




  ]);
}());