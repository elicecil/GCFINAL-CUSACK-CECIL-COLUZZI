angular.module("dndToolKit").component("raceComponent", {
  templateUrl: "race-component/race-component.html",
  bindings: {
    race: '<'

  },

  controller: ["CharacterService", "$location", "DiceService", function(CharacterService, $location, DiceService) {
    this.raceList = {};
    this.race = {};
    this.allRaces = {};
    this.bonuses = [];
    this.addedStats = [];

    this.rollStats = function() {
      DiceService.addStats();
    }

    this.addBonuses = function() {
      this.bonuses = CharacterService.character.race.ability_bonuses;
      var dice = DiceService.addStats();
      console.log("Dice", dice)
      console.log("Bonus", this.bonuses);
      for(var i = 0; i < 6; i++) {
          this.addedStats.push(this.bonuses[i] + dice[i]);
          console.log("Final", this.addedStats);
      }
    }

    this.$onInit = function() {
      CharacterService.getRaceList().then(
        raceList => this.raceList = raceList);
    }


    this.setCharacterRace = function(race) {
      console.log(race);
      CharacterService.setRace(race);
      this.addBonuses();
      $location.url("/class")
    }

    }]
});
