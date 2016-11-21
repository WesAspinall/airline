var ChecklistCtrl = function($scope) {

  var ctrl = this;
  ctrl.title = 'Checklist';
  ctrl.isHidden = true;


  ctrl.toggle = function() {

   ctrl.isHidden = ctrl.isHidden ? false :  true;
  }

  this.$onInit = function() {
    ctrl.checklist = this.itinerary.data.checklist;
  }
  
};


angular
  .module('components.itinerary')
  .controller('ChecklistCtrl', ChecklistCtrl);