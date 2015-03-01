;(function () {

	angular.module('Vehicle')

	.factory('VehicleFactory', ['$http', 'PARSE', '$location', '$rootScope',

		function($http, PARSE, $location, $rootScope) {


			var getAllVehicles = function () {
				return $http.get(PARSE.URL + 'classes/vehicle', PARSE.CONFIG);

			};

			var addSingleVehicle = function (obj) {
				$http.post(PARSE.URL + 'classes/vehicle', obj, PARSE>CONFIG)
				.success( function() {
					$rootScope.$broadcast('vehicle added');

				});
			  
			};


			return {
				retrieve: getAllVehicles,
				add: addSingleVehicle
			}
		}

	]);

}());






