var PassengersCtrl = function() {

  var ctrl = this;
  ctrl.title = 'Passengers';

  this.$onInit = function() {
    ctrl.passengers = this.itinerary.data.passengers;
  }
};


angular
  .module('components.itinerary')
  .controller('PassengersCtrl', PassengersCtrl);