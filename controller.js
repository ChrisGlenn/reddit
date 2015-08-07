var app = angular.module('reddit')
.controller('PostsController', function($scope, FirebaseService){
	
	var getPosts = function(){
		FirebaseService.getAllPosts().then(function(posts){
			$scope.posts = posts;
		});
	}
	getPosts();

	$scope.addPost = function(){
		FirebaseService.addAPost($scope.newPost).then(getPosts);
	}
})