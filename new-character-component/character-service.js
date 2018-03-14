angular.module("dndToolKit").service("CharacterService", ["$http", function($http) {
	this.character = {
		name: "",
		class: {},
		race: {},
		stats: {},
	};

	this.setName = (charName) => {
		console.log(charName);
		this.character.name = charName;
		console.log(this.character.name);
	}

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
		$http.get(classURL).then( (playerClass) => {
			this.character.class = playerClass.data;
			console.log(this.character);
		})
	}

	this.setRace = function(raceURL) {
		$http.get(raceURL).then( (playerRace) => {
			this.character.race = playerRace.data;
			console.log(this.selectedRace);
		})
	}

}]);
