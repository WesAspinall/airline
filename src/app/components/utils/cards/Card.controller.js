var CardCtrl = function($scope) {
  var ctrl = this;
  ctrl.isOpen = false;

  ctrl.toggleOpen = function() {
       ctrl.isOpen = ctrl.isOpen === false ? true: false;
       console.log(ctrl.isOpen);
  }

};

angular
  .module('components.utils')
  .controller('CardCtrl', CardCtrl);