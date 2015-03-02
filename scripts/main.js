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
        controller: 'VehicleController'
      })
      .when('/add', {
        templateUrl: 'scripts/vehicle/add.tpl.html',
        controller: 'VehicleController'
      })
      .when('/total', {
        templateUrl: 'scripts/vehicle/total.tpl.html',
        controller: 'VehicleController'
      })

  }])

}());


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

        //$scope.toggleActive = function(s){
        //  s.active = !s.active;
        //};
       

        $scope.total = function(){

          var total = 0;

    

          angular.forEach($scope.vehicle, function(s){
              if (s.active){
              total += s.price;
          }
      });

          return total;
    };

    }

  ]);

}());
;(function (){
  
  angular.module('Vehicle')

  .factory('VehicleFactory', ['$http', 'PARSE', '$location', '$rootScope',
    function ($http, PARSE, $location, $rootScope) {

      var getAllVehicles = function () {
        return $http.get(PARSE.URL + 'classes/Vehicle', PARSE.CONFIG);
      };

    
      var addSingleVehicle = function (obj) {
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