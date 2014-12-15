angular.module('ShMXCV1', [
  'ngRoute',
  'ngTouch',
  'mobile-angular-ui',
  'ShMXCV1.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'login.html'
  });
  $routeProvider.when('/home', {
    templateUrl: 'home.html'
  });
	$routeProvider.when('/login', {
    templateUrl: 'login.html'
  });

  /*
  $routeProvider.otherwise({
    redirectTo: '/login'
  });
  */
  
  //$routeProvider.when('/login', {templateUrl: 'login.html'});
});