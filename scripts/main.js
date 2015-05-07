;(function (){
  
  angular.module('Vehicle', ['ngRoute'])

  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id' : '10ckZQEW1imr4NvU2kYx1KVBEY5noLXqAuwwnwYH',
        'X-Parse-REST-API-Key'  : 'U6SW6exe2cupuDXXFauD8IuYeqDE18oUJFjdheJk',
        'Content-Type' : 'application/json'
      }
    }

  })

  .config( ['$routeProvider', function ($routeProvider) {

    $routeProvider

          .when('/', {
            templateUrl: 'scripts/vehicle/list.tpl.html',
            controller: 'VehicleCtrl'
          })
          .when('/add', {
            templateUrl: 'scripts/vehicle/add.tpl.html',
            controller: 'VehicleCtrl'
          })
          
          
        }])

}());


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
(function() {

  angular.module('Vehicle')

  .factory('VehicleFactory', [ '$http', 'PARSE', '$location', '$rootScope',
    function($http, PARSE, $location, $rootScope){

      // Getting a list of shows
      var getAllVehicles = function(){
      return  $http.get(PARSE.URL + 'classes/Shows', PARSE.CONFIG)
      .success(function(){
        $rootScope.$broadcast('allVehicles: list');
      });
    };


      var addVehicle = function(obj){
        $http.post(PARSE.URL + 'classes/Shows', obj, PARSE.CONFIG)
        .success(function(){
          $rootScope.$broadcast('show :add');

        });
      };




      return {

        get : getAllVehicles,
        add: addVehicle
      };
    }

  ]);

}());









