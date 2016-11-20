var passengers = {

  templateUrl: './passengers.html',
  controller: 'PassengersCtrl',
  transclude: true


};

angular
  .module('components.itinerary')
  .component('passengers', passengers)
  ;
