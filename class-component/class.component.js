angular.module("dndToolKit").component("classComponent", {
  templateUrl: "class-component/class.component.html",
  bindings: {
    class: '<'

  },

  controller: ["CharacterService", function(CharacterService) {
    this.classList = {};
    this.class = {}

    this.getClassList = function() {
      CharacterService.getClassList().then(
        classList => this.classList = classList.results);
      }

    this.setCharacterClass = function(classURL) {
      console.log(classURL);
      CharacterService.getClass(classURL);
      CharacterService.setClass();
    }

    this.getCharacterInfo = function() {
      console.log(CharacterService.character);
    }
    }]
});