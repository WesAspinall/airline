var ChecklistCtrl = function($scope) {

  var ctrl = this;
  ctrl.title = 'Checklist';

  this.$onInit = function() {
    ctrl.checklist = this.itinerary.data.checklist;
  }
  
};


angular
  .module('components.itinerary')
  .controller('ChecklistCtrl', ChecklistCtrl);