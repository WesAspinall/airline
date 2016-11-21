var flight = {
  bindings: {
    flight: '<',
    aircraft: '<'
  },
  require: {
    itinerary: '^^itinerary'
  },
  templateUrl: './flight.html',
  controller: 'FlightCtrl'
};

angular
  .module('components.itinerary')
  .component('flight', flight)
  ;
