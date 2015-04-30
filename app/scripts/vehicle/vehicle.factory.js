;(function (){
  
  angular.module('Vehicle')

  .factory('VehicleFactory', ['$http', 'PARSE', '$location', '$rootScope',
    function ($http, PARSE, $location, $rootScope) {

     


      //get a list of vehicles//
       var getAllShows = function(){
          return  $http.get(PARSE.URL + 'classes/Vehicle', PARSE.CONFIG)
            .success(function(){
            $rootScope.$broadcast('allVehicles: list');
          });
        };

      //add vehicle//
      var addSingleVehicle = function (obj) {
        $http.post(PARSE.URL + 'classes/Vehicle', obj, PARSE.CONFIG)
          .success( function () {
            $rootScope.$broadcast('vehicle:added');
          });
      };

     
      
 
      return {
        get : getAllVehicles,
        add : addSingleVehicle
        
      }

    }
  ]);

}());