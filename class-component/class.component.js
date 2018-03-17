angular.module("dndToolKit").component("classComponent", {
  templateUrl: "class-component/class-component.html",
  bindings: {
    class: '<'

  },

  controller: ["CharacterService", "$location", function(CharacterService, $location) {
    this.classList = {};
    this.class = {}

    this.$onInit = function() {
      CharacterService.getClassList().then(
        classList => {
          this.classList = classList
          console.log(classList)
        });
      }

    this.setCharacterClass = function(klass) {
      console.log(klass);
      CharacterService.setClass(klass);
      $location.url("/summary")
    }

    this.getCharacterInfo = function() {
      console.log(CharacterService.character);
    }
    }]
});
