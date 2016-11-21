var FlightCtrl = function() {

  var ctrl = this;
  ctrl.title = 'Flight';
  ctrl.isHidden = true;


  ctrl.cancelLeg = function() {
   alert('canceled');
  }

  this.$onInit = function() {
    ctrl.flight = this.itinerary.data.flight;
    ctrl.aircraft = this.itinerary.data.aircraft;
  }
  
};


angular
  .module('components.itinerary')
  .controller('FlightCtrl', FlightCtrl);