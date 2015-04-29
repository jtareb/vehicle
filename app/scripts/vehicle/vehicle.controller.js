;(function (){

  angular.module('Vehicle')

    .controller('VehicleCtrl', ['$scope', 'PostsFactory', '$rootScope', '$location',

      function ($scope, PostsFactory, $rootScope, $location) {

         VehicleFactory.retrieve().success( function (data) {
          $scope.allVehicle = data.results;
         
        }),

         $scope.editVehicle = function (p) {
          VehicleFactory.edit(p).success(function(){

            
          });
         },

        $scope.addVehicle = function (p) {
          PostsFactory.add(p);

        }, 

        $scope.removeVehicle = function (data) {
          PostsFactory.remove(data);
        },

        $rootScope.$on('vehicle:removed', function () {
          $location.path('/');
          VehicleFactory.retrieve().success(function (data) {
            $scope.allVehicle = data.results;
          });
        }),
    
        $rootScope.$on('vehicle:added', function () {
          $location.path('/');
        });
      }
    ]);

}());