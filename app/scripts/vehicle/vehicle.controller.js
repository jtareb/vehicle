;(function() {

	angular.module('Vehicle')

	.controller('VehicleController', ['$scope', '$location', 'VehicleFactory', '$rootScope'

		function ($scope, $location, VehicleFactory, $rootScope) {

			var r = $location.path();

			if (r === '/') {
				VehicleFactory.retrieve().success( function (data) {
					$scope.allVehicle = data.results;

				});
			}

			$scope.addVehicle = function(v) {
				VehicleFactory.add(v);

			}

			$rootScope.$on('vehicle:added', function(event) {
				if(event.defaultPrevented) {
					return;
				}

				event.preventDefault();
				$location.path('/');

			});
		  }
	 ]);

}());