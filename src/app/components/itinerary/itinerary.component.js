var itinerary = {

  templateUrl: './itinerary.html'

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
