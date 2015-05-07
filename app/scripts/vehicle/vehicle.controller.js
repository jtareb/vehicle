(function() {

  angular.module('Vehicle')
  .controller('VehicleCtrl', ['$scope', 'VehicleFactory', '$rootScope', '$cacheFactory',

   function ($scope, VehicleFactory, $rootScope, $cacheFactory) {

      var cache = $cacheFactory.get('http');

      $scope.allVehicles = [];

      VehicleFactory.get().success( function(data){
          $scope.allVehicles = data.results;
        });



      $scope.addVehicle = function(v){


        VehicleFactory.add(v);
        console.log(v);


      };

      $rootScope.$on('Vehicle:add', function(){
      });

    }

  ]);

}());











//;(function (){

 // 'use strict'

 // angular.module('Vehicle')

 //   .controller('VehicleCtrl', ['$scope', 'VehicleFactory', '$rootScope', '$location', 

 //     function ($scope, PostsFactory, $rootScope, $location) {

 //       $scope.allVehicles = [];
          
          //get all vehicles
 //        VehicleFactory.get().success( function (data) {
 //         $scope.allVehicles = data.results;
         
 //       });
        
         //add a vehicle
 //       $scope.addVehicle = function (v) {
 //         VehicleFactory.add(v);

 //       }, 
    
 //       $rootScope.$on('vehicle:added', function () {
  //        $location.path('/');
  //      });
 //     }
 //   ]);

//}());