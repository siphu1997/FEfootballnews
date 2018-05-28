var app = /**
* myLogin Module
*
* Description
*/
angular.module('loginApp', []).controller('loginController', ['$scope', function($scope){
	var User ={
		Name : "",
		Password : ""
	};
	$scope.login = function(user){
		User.Name = user.name;
		User.Password = user.password
	}
}])