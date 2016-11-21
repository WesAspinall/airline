var NotesCtrl = function() {
  var ctrl = this;
  ctrl.title = 'Notes';

   this.$onInit = function() {
    ctrl.notes = this.itinerary.data.notes;
  }
};

angular
  .module('components.itinerary')
  .controller('NotesCtrl', NotesCtrl);