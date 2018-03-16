angular.module("dndToolKit").service("DiceService", function() {
    this.rollDie = function() {
        return Math.ceil(Math.random() * 4);
    } 

    this.rollDice = () => {
        return Array(3).fill(0).map(this.rollDie);
    }

    this.addStats = function() {
        var dice = this.rollDice();
        return this.rollDice().reduce((total, amount) => total + amount);
    }
    // this.filterLowest = () => {
    //     var dice = this.rollDice();
    //     var min = Math.min(...dice);
    //     return dice.filter(roll => roll != min);
    // }
});