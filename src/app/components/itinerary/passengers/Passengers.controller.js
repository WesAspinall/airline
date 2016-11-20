var PassengersCtrl = function() {

  var ctrl = this;
  ctrl.title = 'Passengers';
  ctrl.editMode = false;
  ctrl.toggleEdit = toggleEdit;


  function toggleEdit() {
    if(ctrl.editMode === true) {
      ctrl.editMode === false
    } else if (ctrl.editMode === false) {
      ctrl.editMode === true
    }
    console.log(ctrl.editMode)
  }
  

  ctrl.passengers = [{
    name: 'Dana White',
    img: 'img/dana.jpg',
    lead: true,
    weight: 170,
    DOB: '01/11/1980',
    docs: true
  }, {
    name: 'Conor McGregor',
    img: 'img/conor.jpeg',
    lead: false,
    weight: 155,
    DOB: '04/27/1970',
    docs: true
  }, {
    name: '',
    img: 'img/khaled.png',
    lead: false,
    weight: '',
    DOB: '',
    docs: true
  }];



};


angular
  .module('components.itinerary')
  .controller('PassengersCtrl', PassengersCtrl);