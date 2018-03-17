angular.module("dndToolKit").component("diceRoller", {
    templateUrl: "dice-roller/dice-roller.html",
  
    controller: ["DiceService", "CharacterService", function(DiceService, CharacterService) {
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
    }]
});