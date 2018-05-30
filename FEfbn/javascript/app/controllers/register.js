var app = /**
* RegisterApp Module
*
* Description
*/
angular.module('registerApp', []).controller('registerController', ['$scope','$http', function($scope,$http){
	
	$scope.register = function(){
		var userDTO = {
			"username" : $scope.user.username,
			"email" : $scope.user.email,
			"password"	: $scope.user.password
		}
		if($scope.user.password == $scope.user.repassword) {
			
			//Post data
			var config = {
			headers : {
				'Content-Type': 'application/json;charset=utf-8;'
			}
		}

		var userJson = JSON.stringify(userDTO);
		console.log(userJson);

		var res = $http.post('http://localhost:8080/footballnewsbe/user/register', userDTO)
		.then(function(res, status, headers, config) {
			var userRes = res.data.data;
			console.log(userRes.username);
		},
		function (error){
			console.log(error);
   		});

		}
		else alert("Mật khẩu không trùng nhau.") ;

		

   		
}}])