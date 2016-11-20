var checklist = {
  bindings: {
    checklist: '<'
  },
  require: {
    itinerary: '^^itinerary'
  },
  templateUrl: './checklist.html',
  controller: 'ChecklistCtrl'
};

angular
  .module('components.itinerary')
  .component('checklist', checklist)
  ;
