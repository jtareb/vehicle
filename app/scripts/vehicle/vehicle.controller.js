;(function (){

  angular.module('Vehicle')

    .controller('VehicleCtrl', ['$scope', 'PostsFactory', '$rootScope', '$location',

      function ($scope, PostsFactory, $rootScope, $location) {

         VehicleFactory.get().success( function (data) {
          $scope.allVehicles = data.results;
         
        }),

        $scope.addVehicle = function (p) {
          VehicleFactory.add(p);

        }, 
    
        $rootScope.$on('vehicle:added', function () {
          $location.path('/');
        });
      }
    ]);

}());