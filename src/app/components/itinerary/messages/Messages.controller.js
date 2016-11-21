var MessagesCtrl = function() {
  var ctrl = this;

  ctrl.title = 'Messages';

  this.$onInit = function() {
    ctrl.messages = this.itinerary.data.messages;
  }
};

angular
  .module('components.itinerary')
  .controller('MessagesCtrl', MessagesCtrl);  