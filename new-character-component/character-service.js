angular.module("dndToolKit").service("CharacterService", ["$http", "$location", "$q", function($http, $location, $q) {
	this.character = {
		name: "",
		class: {},
		race: {},
		stats: {},
		startingEquiment: {}
	};

	this.setName = (charName) => {
		console.log(charName);
		this.character.name = charName;
		console.log(this.character.name);
	}

	this.getClassList = function() {
		return $http.get("http://www.dnd5eapi.co/api/classes").then(
			response => { 
				return $q.all(response.data.results.map( klass => {
					console.log(klass)
					return this.getClass(klass.url)
				}));
			})
	}

	this.getRaceList = function() {
		return $http.get("http://www.dnd5eapi.co/api/races").then(
			response => {
				return $q.all(response.data.results.map( race => {
					console.log(race)
					return this.getRace(race.url)
				}));
			})
	}

	this.getStartingEquipment = function() {
		return $http.get("http://www.dnd5eapi.co/api/startingequipment").then(
			response => response.data
			)
	}

	this.getClass = function(classURL) {
		return $http.get(classURL).then( playerClass => {
			console.log(playerClass.data)
			return playerClass.data;
		})
	}

	this.getRace = function(raceURL) {
		return $http.get(raceURL).then( playerRace => {
			console.log(playerRace.data)
			return playerRace.data;
		})
	}

	this.setRace = function(race) {
		this.character.race = race	
	}

	this.setClass = function(klass) {
		this.character.class = klass
	}
	


	this.fetchCharacter = () => {
		console.log(this.character);
		return this.character
	}

}]);
