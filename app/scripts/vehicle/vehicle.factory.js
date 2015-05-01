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









//;(function (){

//  'use strict'
  
 // angular.module('Vehicle')

 // .factory('VehicleFactory', ['$http', 'PARSE', '$location', '$rootScope',
 //   function ($http, PARSE, $location, $rootScope,) {

     
      //get a list of vehicles//
 //      var getAllVehicles = function(){
 //         return  $http.get(PARSE.URL + 'classes/Vehicle', PARSE.CONFIG)
 //           .success(function(){
            //$rootScope.$broadcast('allVehicles: list');
 //         });
 //       };

      //add vehicle//
 //     var addVehicle = function (obj) {
 //       $http.post(PARSE.URL + 'classes/Vehicle', obj, PARSE.CONFIG)
  //        .success( function () {
 //           $rootScope.$broadcast('vehicle :add');
  //        });
 //     };

     
      
 
//      return {
//        get : getAllVehicles,
//        add : addVehicle
        
 //     }
//
    }
//  ]);

//}());