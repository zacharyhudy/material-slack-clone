angular.module('angularfireSlackApp')
	.factory('Auth', function($firebaseAuth, FirebaseUrl){
		var ref = new Firebase(FirebaseUrl);
		var auth = $firebaseAuth(ref);

		return auth;
	});

angular.module('angularfireSlackApp')
	.controller('AuthCtrl', function(Auth, $state){
		var authCtrl = this;

		authCtrl.user = {
			email: '',
			password: ''
		};
	});

authCtrl.login = function(){
	Auth.$authWithPassword(authCtrl.user).then(function(auth){
		$state.go('home');
	}, funtion(error){
		authCtrl.error = error;
	});
};

authCtrl.register = function(){
	Auth.$createUser(authCtrl.user).then(function(user){
		authCtrl.login();
	}, function(error){
		authCtrl.error = error;
	});
};