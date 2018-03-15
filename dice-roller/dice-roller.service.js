angular.module("dndToolKit").service("DiceService", function() {
    this.rolls = [];
    
    this.rollStats = function() {
        for(var i = 0; i < 4; i++) {
            var roll = Math.floor(Math.random() * 7);
            return (roll);
        }
    } 
});