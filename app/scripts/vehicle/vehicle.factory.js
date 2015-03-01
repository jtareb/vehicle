;(function (){
  
  angular.module('Whiskey')

  .factory('WhiskeyFactory', ['$http', 'PARSE', '$location', '$rootScope',
    function ($http, PARSE, $location, $rootScope) {

      // Getting A List of Whiskey
      var getAllWhiskeys = function () {
        return $http.get(PARSE.URL + 'classes/Whiskey', PARSE.CONFIG);
      };

      // Adding A Whiskey
      var addSingleWhiskey = function (obj) {
        $http.post(PARSE.URL + 'classes/Whiskey', obj, PARSE.CONFIG)
          .success( function () {
            $rootScope.$broadcast('whiskey:added');
          }
        );
      };

      return {
        retrieve : getAllWhiskeys,
        add : addSingleWhiskey
      }

    }
  ]);

}());