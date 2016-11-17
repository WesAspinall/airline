var PassengersCtrl = function(ItineraryService) {

  var ctrl = this;
  ctrl.activate = activate;
  activate();

  function activate() {
    console.log('hello from passengersCtrl');
  }


  ctrl.passengers = [{
    name: 'Passenger A',
    lead: true,
    weight: 170,
    DOB: '01/11/1980'
  }, {
    name: 'Passenger B',
    lead: false,
    weight: 170,
    DOB: '04/27/1970'
  }, {
    name: 'Passenger C',
    lead: true,
    weight: 170,
    DOB: '9/20/1972'
  }];

};


angular
  .module('components.itinerary')
  .controller('PassengersCtrl', PassengersCtrl);