angular.module("dndToolKit").component("newCharacterComponent", {
  templateUrl: "new-character-component/new-character-component.html",

  controller: ["CharacterService", function(CharacterService) {
    this.name= "";

    this.setName = function(CharName) {
      CharacterService.setName(CharName);
    }
  }]
});
