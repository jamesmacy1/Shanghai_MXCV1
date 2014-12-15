angular.module('ShMXCV1.controllers.Main', [])

.controller('MainController', ['$scope', '$location', function($scope, $location){

	// User
	$scope.user = {
		username: "",
		password: "",
		token: "",
		is_logged: false,
		err_msg: "",
		login_css: "login"
	};
	
	$scope.signin = function() {
		var username = $scope.user.username;
		var password = $scope.user.password;
		
		if (username == "test" && password == "test") {
			$scope.user.is_logged = true;
			$scope.user.err_msg = "";
			$scope.user.login_css = "";
			$location.path("/home");
		} else {
			$scope.user.is_logged = false;
			$scope.user.login_css = "login";
			$scope.user.err_msg = "Username or password is not correct!";
		}
		return false;
	}

	$scope.logout = function() {
		$scope.user.username = "";
		$scope.user.password = "";
		$scope.user.token = "";
		$scope.user.is_logged = false;
		$scope.user.err_msg = "";
		$scope.user.login_css = "login";

		$location.path("/login");
	}

	$scope.facebook_login = function() {
		/*
		if (!window.cordova) {
			var appId = prompt("Enter FB Application ID", "");
			facebookConnectPlugin.browserInit(appId);
		}
		*/
		facebookConnectPlugin.login( ["email"], 
			function (response) { 
				alert(JSON.stringify(response)) 
			},
			function (response) {
				alert(JSON.stringify(response)) 
			});
	}
}]);