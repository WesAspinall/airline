var messages = {
  bindings: {
    messages: '<'
  },
  require: {
    itinerary: '^^itinerary'
  },
  templateUrl: './messages.html',
  controller: 'MessagesCtrl'

};

angular
  .module('components.itinerary')
  .component('messages', messages)
  ;
