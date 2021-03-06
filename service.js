var app = angular.module('reddit')
.service('FirebaseService', function($http, $q){
	//Get request
	this.getAllPosts = function(){
		return $http({
			method: 'GET',
			url: 'https://devmtn.firebaseio.com/posts.json'
		}).then(function(response){
			return response.data;
		})
	}
	//Post request
	this.addAPost = function(post){
		post.timestamp = Date.now();
		post.comments = [];
		post.karma = 0;
		post.id = guid();
		return $http({
			method: 'PUT',
			url: 'https://devmtn.firebaseio.com/posts/' + post.id + '.json',
			data: post
		})
	}

	var guid = function() {
    var s4 = function() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
})