angular.module("dndToolKit").component("newCharacterComponent", {
  templateUrl: "new-character-component/new-character-component.html",

  controller: ["CharacterService","$location", function(CharacterService, $location) {
    this.name= "";

    this.setName = function(CharName) {
      CharacterService.setName(CharName);
      $location.url("/race");

    }
    this.print = function() {
    	location = CharacterService.print();
	}
  }]
});
