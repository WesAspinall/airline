var confirmation = {
  require: {
    itinerary: '^^itinerary'
  },
  templateUrl: './confirmation.html',
  controller: 'ConfirmationCtrl'
  
};

angular
  .module('components.itinerary')
  .component('confirmation', confirmation)
  ;
