angular.module("dndToolKit").config(["$routeProvider", function($routeProvider) {
  $routeProvider.when('/', {
    template: '<new-character-component />',
  });

  $routeProvider.when('/race', {
    template: '<race-component />',
  });

  $routeProvider.when('/class', {
    template: '<class-component />',
  });
  $routeProvider.when('/summary', {
    template: '<summary-component />',
  });

  $routeProvider.when('/roll', {
    template: '<dice-roller />',
  });
}]);
