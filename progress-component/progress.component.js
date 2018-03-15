angular.module("dndToolKit").component("progressSteps", {
  templateUrl: 'progress-component/progress.html',
  bindings: {
  	currentStep: '<',
    maxSteps: '<'

  },


  controller: ["CharacterService", function(CharacterService) {

  	this.maxSteps = () => {
  		new Array[5]
  	}

  }]
});