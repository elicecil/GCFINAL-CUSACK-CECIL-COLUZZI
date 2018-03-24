angular.module("dndToolKit").service("DiceService", function() {
    this.rolls = [];

    this.rollDie = function() {
       return Math.ceil(Math.random() * 6);
    } 

    this.rollDice = () => {
        return Array(4).fill(0).map(this.rollDie);
    }

    this.findLowest = () => {
        var dice = this.rollDice();
        var min = Math.min(...dice);
        var indexOfMin = dice.indexOf(min);
        dice[indexOfMin] = 0;
        return dice;
    }

    this.addStats = function() {
        for(var i = 0; i < 6; i++) {
            var dice = this.rollDice();
            dice = this.findLowest(dice);
            var sum = this.rollDice().reduce((total, amount) => total + amount);
            if(sum >= 8) {
                this.rolls.push(sum)
            } else {
                sum = 8;
                this.rolls.push(sum)
            } 
        } return this.rolls;
    }

    this.manualRoll = function(diceX) {
        return Math.ceil(Math.random() * diceX);
    } 
});