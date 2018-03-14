angular.module("dndToolKit").service("CharacterService", ["$http", function($http) {
	this.character = {
		name: "",
		class: "",
		race: "",
		stats: "",
	};

	this.selectedRace = {};

	this.getClassList = function() {
		return $http.get("http://www.dnd5eapi.co/api/classes").then(
			response => response.data
		)
	}

	this.getRaceList = function() {
		return $http.get("http://www.dnd5eapi.co/api/races").then(
			response => response.data
		)
	}

	this.getClass = function(classURL) {
		return $http.get(classURL).then(
			response => response.data
		)
	}

	this.getRace = function(raceURL) {
		$http.get(raceURL).then(function(playerRace){
			this.selectedRace = playerRace.data;
			console.log(this.selectedRace);
		})
	}

	this.setRace = function() {
		this.character.race = this.selectedRace;
		console.log(this.character);
	}

}]);
