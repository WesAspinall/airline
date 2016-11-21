var FlightCtrl = function($scope) {

  var ctrl = this;
  ctrl.title = 'Flight';
  ctrl.isHidden = true;


  ctrl.toggle = function() {
   ctrl.isHidden = ctrl.isHidden ? false :  true;
  }

  this.$onInit = function() {
    ctrl.flight = this.itinerary.data.flight;
    ctrl.aircraft = this.itinerary.data.aircraft;
  }
  
};


angular
  .module('components.itinerary')
  .controller('FlightCtrl', FlightCtrl);