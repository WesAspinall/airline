var card = {
  templateUrl: './card.html',
  transclude: true
};

angular
  .module('components.itinerary')
  .component('card', card)
  ;