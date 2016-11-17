var passengers = {
  templateUrl: './passengers.html',
  controller: 'PassengersCtrl'
};

angular
  .module('components.itinerary')
  .component('passengers', passengers)
  ;