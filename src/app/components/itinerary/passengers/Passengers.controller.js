var PassengersCtrl = function($scope) {

  var ctrl = this;
  ctrl.title = 'Passengers';
  ctrl.editMode = false;
  ctrl.editClick = function() {
    ctrl.editMode = true;
  }

  this.$onInit = function() {

    ctrl.passengers = this.itinerary.data.passengers;

  }
};


angular
  .module('components.itinerary')
  .controller('PassengersCtrl', PassengersCtrl);