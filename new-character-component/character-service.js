angular.module("dndToolKit").service("CharacterService", ["$http", function($http) {
	this.character = {
		name: "",
		class: {},
		race: {},
		stats: {},
	};

	this.getClass = function() {
		return $http.get("http://www.dnd5eapi.co/api/classes").then(
			response => response.data
			)
	}

	this.getRace = function() {
		return $http.get("http://www.dnd5eapi.co/api/races").then(
			response => response.data
			)
	}





}]);
