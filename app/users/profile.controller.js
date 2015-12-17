angular.module('angularfireSlackApp')
	.factory('Auth', function($firebaseAuth, FirebaseUrl){
		var ref = new Firebase(FirebaseUrl);
		var auth = $firebaseAuth(ref);

		return auth;
	});



angular.module('angularfireSlackApp')
	.controller('ProfileCtrl', function($state, md5, auth, profile, Auth){
		var profileCtrl = this;
		profileCtrl.profile = profile;

		profileCtrl.updateProfile = function(){
			profileCtrl.profile.emailHash = md5.createHash(auth.password.email);
			profileCtrl.profile.$save();
		}

		profileCtrl.logout = function(){
			Auth.$unauth();
			$state.go('home');
			console.log('trying to logout')
		}
		
	});


