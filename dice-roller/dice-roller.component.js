angular.module("dndToolKit").component("diceRoller", {
    templateUrl: "dice-roller/dice-roller.html",
  
    controller: ["DiceService", "CharacterService", function(DiceService, CharacterService) {
        this.d20 = "";
        this.d8 = "";
        this.d6 = "";
        this.d4 = "";

        this.rollDie = function(diceX) {
            if(diceX === 20) {
                this.d20 = DiceService.manualRoll(diceX);
                return this.d20;
            } else if (diceX === 8) {
                this.d8 = DiceService.manualRoll(diceX);
                return this.d8;
            } else if (diceX === 6) {
                this.d6 = DiceService.manualRoll(diceX);
                return this.d6;
            } else {
                this.d4 = DiceService.manualRoll(diceX)
                return this.d4;
            }
        }
    }]
});