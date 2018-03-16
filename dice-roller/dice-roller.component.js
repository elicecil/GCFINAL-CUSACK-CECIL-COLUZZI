angular.module("dndToolKit").component("diceRoller", {
    templateUrl: "dice-roller/dice-roller.html",
  
    controller: ["DiceService", function(DiceService) {

        this.rollStats = function() {
            DiceService.addStats();
        }
    }]
});