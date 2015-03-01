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

      $scope.addVehicle = function (v) {
        VehicleFactory.add(v);
      }

      $rootScope.$on('vehicle:added', function (event) {
      
        if(event.defaultPrevented) {
          return;
        }
       
        event.preventDefault();
        $location.path('/');
      });

        $scope.total = function(){

          var total = 0;

    

          angular.forEach($scope.vehicle, function(s){
              if (s.active){
              total+= s.price;
          }
      });

          return total;
    };

    }

  ]);

}());