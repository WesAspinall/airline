var ConfirmationCtrl = function() {
  var ctrl = this;
  ctrl.title = 'confirmation';

    this.$onInit = function(){
      setTimeout(function() {
        ctrl.loaded = true;
      }, 275);
    }
};

angular
  .module('components.itinerary')
  .controller('ConfirmationCtrl', ConfirmationCtrl);