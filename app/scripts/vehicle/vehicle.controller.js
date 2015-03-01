;(function (){
  
  angular.module('Vehicle')

  .controller('VehicleController', ['$scope', '$location', 'VehicleFactory', '$rootScope',
    
    function ($scope, $location, VehicleFactory, $rootScope) {

      var r = $location.path();

      if (r === '/') {
        VehicleFactory.retrieve().success( function (data) {
          $scope.allVehicle = data.results;
        });
      }

      $scope.addVehicle = function (w) {
        VehicleFactory.add(w);
      }

      $rootScope.$on('vehicle:added', function (event) {
        // handle event only if it was not defaultPrevented
        if(event.defaultPrevented) {
          return;
        }
        // mark event as "not handle in children scopes"
        event.preventDefault();
        $location.path('/');
      });

    }

  ]);

}());