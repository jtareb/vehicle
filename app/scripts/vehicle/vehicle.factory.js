;(function (){
  
  angular.module('Vehicle')

  .factory('VehicleFactory', ['$http', 'PARSE', 'UserFactory', '$rootScope',
    function ($http, PARSE, UserFactory, $rootScope) {

      var user = UserFactory.user();


      //get a list of vehicles//
      var getAllVehicles = function () {
        return $http.get(PARSE.URL + 'classes/Vehicle', PARSE.CONFIG);
      };

      //add vehicle//
      var addSingleVehicle = function (obj) {
        $http.post(PARSE.URL + 'classes/Vehicle', obj, PARSE.CONFIG)
          .success( function () {
            $rootScope.$broadcast('vehicle:added');
          }
        );
      };

      var removeVehicle = function (obj) {
        $http.delete(PARSE.URL + 'classes/Vehicle/' + obj.objectId, PARSE.CONFIG)
          .success( function () {
            $rootScope.$broadcast('vehicle:removed');

          });
      };

       var editVehicle = function (obj) {
         return $http.get(PARSE.URL + 'classes/Vehicle' + obj.objectId, PARSE.CONFIG);
      };
      
 
      return {
        retrieve : getAllVehicles,
        add : addSingleVehicle,
        remove : removeVehicle,
        edit : editVehicle
      }

    }
  ]);

}());