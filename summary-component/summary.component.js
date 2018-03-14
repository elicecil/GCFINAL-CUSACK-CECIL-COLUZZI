angular.module("dndToolKit").component("summaryComponent", {
  templateUrl: "summary-component/summary-component.html",

  controller: ["CharacterService", "$location", function(CharacterService, $location) {

    this.character = CharacterService.fetchCharacter();

  }]
});
