angular.module("dndToolKit").component("classComponent", {
  templateUrl: "class-component/class-component.html",
  bindings: {
    class: '<'

  },

  controller: ["CharacterService", "$location", function(CharacterService, $location) {
    this.classList = {};
    this.class = {}

    this.getClassList = function() {
      CharacterService.getClassList().then(
        classList => this.classList = classList.results);
      }

    this.setCharacterClass = function(classURL) {
      console.log(classURL);
      CharacterService.getClass(classURL);
      $location.url("/summary")
    }

    this.getCharacterInfo = function() {
      console.log(CharacterService.character);
    }
    }]
});
