;(function (){
  
  angular.module('Whiskey')

  .controller('WhiskeyController', ['$scope', '$location', 'WhiskeyFactory', '$rootScope',
    
    function ($scope, $location, WhiskeyFactory, $rootScope) {

      var r = $location.path();

      if (r === '/') {
        WhiskeyFactory.retrieve().success( function (data) {
          $scope.allWhiskey = data.results;
        });
      }

      $scope.addWhiskey = function (w) {
        WhiskeyFactory.add(w);
      }

      $rootScope.$on('whiskey:added', function (event) {
        // handle event only if it was not defaultPrevented
        if(event.defaultPrevented) {
          return;
        }
        // mark event as "not handle in children scopes"
        event.preventDefault();
        console.log('yo yo');
        $location.path('/');
      });

    }

  ]);

}());