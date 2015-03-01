;(function (){
  
  angular.module('Vehicle')

  .factory('VehicleFactory', ['$http', 'PARSE', '$location', '$rootScope',
    function ($http, PARSE, $location, $rootScope) {

      // Getting A List of Whiskey
      var getAllVehicles = function () {
        return $http.get(PARSE.URL + 'classes/Vehicle', PARSE.CONFIG);
      };

      // Adding A Whiskey
      var addSingleWhiskey = function (obj) {
        $http.post(PARSE.URL + 'classes/Vehicle', obj, PARSE.CONFIG)
          .success( function () {
            $rootScope.$broadcast('vehicle:added');
          }
        );
      };

      return {
        retrieve : getAllVehicles,
        add : addSingleVehicle
      }

    }
  ]);

}());