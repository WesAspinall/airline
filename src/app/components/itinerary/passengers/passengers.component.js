var passengers = {
  bindings: {
    passengers: '<'
  },
  require: {
    itinerary: '^^itinerary'
  },
  templateUrl: './passengers.html',
  controller: 'PassengersCtrl'

};

angular
  .module('components.itinerary')
  .component('passengers', passengers)
  ;
