var app = angular.module('app',[]);

app.controller('studentController', function($scope, $http){

	$http.get('http://jsonplaceholder.typicode.com/posts/1/comments').success(function(response){
		$scope.posts = response.records;
// 
	});

});

