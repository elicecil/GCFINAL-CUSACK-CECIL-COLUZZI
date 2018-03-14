angular.module("dndToolKit").component("raceComponent", {
  templateUrl: "race-component/race-component.html",
  bindings: {
    race: '<'

  },
  
  controller: ["CharacterService", function(CharacterService) {
    this.raceList = {};

    this.getRace = function() {
      CharacterService.getRace().then(
        raceList => this.raceList = raceList.results);

      }
    }]
});