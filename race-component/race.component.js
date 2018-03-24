angular.module("dndToolKit").component("raceComponent", {
  templateUrl: "race-component/race-component.html",
  bindings: {
    race: '<'

  },

  controller: ["CharacterService", "$location", "DiceService", function(CharacterService, $location, DiceService) {
    this.raceList = null;
    this.race = {};
    this.allRaces = {};
    this.bonuses = [];
    this.addedStats = [];
    this.stats = {};
    this.statNames = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];

    this.rollStats = function() {
      DiceService.addStats();
    }

    this.addBonuses = function() {
      this.bonuses = CharacterService.character.race.ability_bonuses;
      var dice = DiceService.addStats();
      this.statNames.forEach((statName, i) => {
          this.stats[statName] = (this.bonuses[i] + dice[i]);
          console.log("Final", this.stats);
      });
      CharacterService.character.stats = this.stats;
    }

    this.$onInit = function() {
      CharacterService.getRaceList().then(
        raceList => this.raceList = raceList);
    }


    this.setCharacterRace = function(race) {
      CharacterService.setRace(race);
      this.addBonuses();
      $location.url("/class")
    }

    this.backButton = function() {
      $location.url("/")
    }

    }]
});
