var card = {

  templateUrl: './card.html',
  transclude: true,
  controller: 'CardCtrl'

};

angular
  .module('components.utils')
  .component('card', card)
  ;