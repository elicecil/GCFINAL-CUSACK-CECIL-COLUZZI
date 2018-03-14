angular.module("dndToolKit").component("raceComponent", {
  templateUrl: "race-component/race-component.html",
  bindings: {
    race: '<'

  },

  controller: ["CharacterService", "$location", function(CharacterService, $location) {
    this.raceList = {};
    this.race = {};

    this.getRaceList = function() {
      CharacterService.getRaceList().then(
        raceList => this.raceList = raceList.results);
      }

    this.setCharacterRace = function(raceURL) {
      console.log(raceURL);
      CharacterService.setRace(raceURL);
      $location.url("/class")
    }

    this.getCharacterInfo = function() {
      console.log(CharacterService.character);
    }
    }]
});
