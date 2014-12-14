angular.module('ShMXCV1', [
  'ngRoute',
  'ngTouch',
  'mobile-angular-ui',
  'ShMXCV1.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'home.html'});
});