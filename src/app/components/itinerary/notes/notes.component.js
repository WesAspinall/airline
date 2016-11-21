var notes = {
  bindings: {
    notes: '<'
  },
  require: {
    itinerary: '^^itinerary'
  },
  templateUrl: './notes.html',
  controller: 'NotesCtrl'
};

angular
  .module('components.itinerary')
  .component('notes', notes)
  ;
