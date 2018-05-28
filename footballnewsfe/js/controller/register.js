var app = /**
* RegisterApp Module
*
* Description
*/
angular.module('registerApp', []).controller('registerController', ['$scope', function($scope){
	var User ={
		Name :"",
		Email :"",
		Password:""
	};
	$scope.register = function(user){
		User.Name = user.name;
		User.Email = user.email;
		User.Password = user.password;	
		if(user.password == user.repassword) {
			var myjson = JSON.stringify(User);
			document.getElementById("demo").innerHTML = myjson;
		}
		else alert("Mật khẩu không trùng nhau.") ;
		
}}])