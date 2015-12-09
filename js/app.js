var angular = angular;

var app = angular.module('TestMe', ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'index.html',
    title: 'Index Page',
    controller: 'indexController',
    resolve: {
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
  })
  .when('/results.html', {
    templateUrl: 'results.html',
    title: 'Results Page',
    controller: 'resultsController'
  });
  $locationProvider.html5Mode(true);
});

app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);