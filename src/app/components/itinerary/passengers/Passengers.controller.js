var PassengersCtrl = function() {

  var ctrl = this;
  ctrl.title = 'Passengers';
  ctrl.complete = false;
  ctrl.isComplete = isComplete;
  ctrl.removePassenger = removePassenger;
  ctrl.addPassenger = addPassenger;

  ctrl.editClick = function() {
    ctrl.editMode = ctrl.editMode ? false :  true;
    isComplete();
  };
 
  this.$onInit = function() {
    ctrl.passengers = this.itinerary.data.passengers;
  };

  function addPassenger(Name, DOB, Weight){
    ctrl.passengers.push({
      'Name': Name,
      'lead': false,
      'DOB': DOB,
      'Weight': Weight,
      'Docs': true
    });
  }

  function removePassenger(index) {
    console.log('is this working');
    ctrl.passengers.splice(index, 1);
  }

  function isComplete() {
    for (var i = 0; i < ctrl.passengers.length; i++) {
      if(ctrl.passengers[i].Name && ctrl.passengers[i].DOB && ctrl.passengers[i].Weight){
        ctrl.complete = true;
      } else {
        ctrl.complete = false;
      }
    }
  }


};


angular
  .module('components.itinerary')
  .controller('PassengersCtrl', PassengersCtrl);