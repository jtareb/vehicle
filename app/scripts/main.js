;(function (){
  
  angular.module('Whiskey', ['ngRoute'])

  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id' : 'JvvEUbxGMLg1jLXtVIcKyOifWZpcn2roFhiJYrZU',
        'X-Parse-REST-API-Key'  : 'OA7OXUX442WyIL09Bn6gosVj9GlRSOwconL1DLW1',
        'Content-Type' : 'application/json'
      }
    }

  })

  .config( ['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'scripts/whiskey/list.tpl.html',
        controller: 'WhiskeyController'
      })
      .when('/add', {
        templateUrl: 'scripts/whiskey/add.tpl.html',
        controller: 'WhiskeyController'
      })

  }])

}());