var card = {
  templateUrl: './card.html',
  transclude: true
};

angular
  .module('components.utils')
  .component('card', card)
  ;