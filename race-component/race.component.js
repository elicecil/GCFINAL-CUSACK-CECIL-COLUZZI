angular.module("dndToolKit").component("raceComponent", {
  templateUrl: "race-component/race-component.html",
  bindings: {
    race: '<'

  },

  controller: ["CharacterService", "$location", function(CharacterService, $location) {
    this.raceList = {};
    this.race = {};
    this.allRaces = {};

    this.getRaceList = function() {
      CharacterService.getRaceList().then(
        raceList => this.raceList = raceList);
      }


    this.setCharacterRace = function(race) {
      console.log(race);
      CharacterService.setRace(race);
      $location.url("/class")
    }

    }]
});
