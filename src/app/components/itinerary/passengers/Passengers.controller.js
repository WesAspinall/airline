var PassengersCtrl = function(ItineraryService) {

  var ctrl = this;
  ctrl.title = 'Passengers';
  ctrl.activate = activate;
  activate();

  function activate() {
    console.log('hello from passengersCtrl');
  }


  ctrl.passengers = [{
    first_name: 'Dana',
    last_name: 'White',
    img: 'img/dana.jpg',
    lead: true,
    weight: 170,
    DOB: '01/11/1980'
  }, {
    first_name: 'Conor',
    last_name: 'McGregor',
    img: 'img/conor.jpeg',
    lead: false,
    weight: 154.8,
    DOB: '04/27/1970'
  }, {
    first_name: 'missing',
    last_name: 'missing',
    img: 'https://placehold.it/80x80',
    lead: false,
    weight: 'missing',
    DOB: 'missing'
  }];



};


angular
  .module('components.itinerary')
  .controller('PassengersCtrl', PassengersCtrl);