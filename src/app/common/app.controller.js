function AppCtrl() {
  var ctrl = this;

  ctrl.appTitle = 'Itinerary';
  
}

angular
  .module('app')
  .controller('AppCtrl', AppCtrl);