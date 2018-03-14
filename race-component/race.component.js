angular.module("dndToolKit").component("raceComponent", {
  templateUrl: "race-component/race-component.html",
  bindings: {
    race: '<'

  },

  controller: ["CharacterService", function(CharacterService) {
    this.raceList = {};
    this.race = {}

    this.getRaceList = function() {
      CharacterService.getRaceList().then(
        raceList => this.raceList = raceList.results);
      }

    this.setCharacterRace = function(raceURL) {
      console.log(raceURL);
      CharacterService.getRace(raceURL);
      CharacterService.setRace();
    }

    this.getCharacterInfo = function() {
      console.log(CharacterService.character);
    }
    }]
});
