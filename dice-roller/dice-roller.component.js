angular.module("dndToolKit").component("diceRoller", {
    templateUrl: "dice-roller/dice-roller.html",
  
    controller: ["DiceService", function(DiceService) {
        this.roll = ""

        this.rollStats = function() {
            var roll = DiceService.rollStats();
            var min = Math.min(roll);
            var finalRoll = roll.filter(e => e != min);
            console.log(min);

        }
    }]
});