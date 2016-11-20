var itinerary = {

  templateUrl: './itinerary.html',
  controller: 'ItineraryCtrl'
};

angular
  .module('components.itinerary')
  .component('itinerary', itinerary)
  .config(function($stateProvider) {

    $stateProvider
      .state('itinerary', {
        parent: 'app',
        url: '^/itinerary',
        component: 'itinerary'
      });
  })
  ;
