; (function () {

	angular.module('Vehicle', ['ngRoute'])


	.constant('PARSE', {
		URL: 'https://api.parse.com/1/',
		CONFIG: {
			headers: {
				'X-Parse-Application-Id': '10ckZQEW1imr4NvU2kYx1KVBEY5noLXqAuwwnwYH',
				'X-Parse-REST-API-Key': 'U6SW6exe2cupuDXXFauD8IuYeqDE18oUJFjdheJk',
				'Content-Type': 'application/json'
				}
			}
		})

	.config( ['$routeProvder', function($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'scripts/vehicle/list.tpl.html',
				controller: 'VehiceController'
			})

			.when('/add', {
				templateUrl: 'scripts/vehicle/add.tpl.html',
				controller: 'VehicleController'
			})

		}])


}());
	





