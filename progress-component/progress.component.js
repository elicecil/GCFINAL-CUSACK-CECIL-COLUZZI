angular.module("dndToolKit").component("progressSteps", {
  templateUrl: 'progress-component/progress.html',
  bindings: {
  	step: '<',
    steps: '<'
  },


  controller: [ function(){
  	
  	this.$onInit = function() {
  		this.allSteps = []
  		for (var i = 0; i <= this.steps; i++) {
  			this.allSteps.push(i)
  		}
  	}


  }]
  
});