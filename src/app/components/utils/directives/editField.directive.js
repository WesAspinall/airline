function editField() {

  return  {
    restrict: 'A',
    scope: {},
    link: function ($scope, $element, $attrs) {
 

    }
  }

}

angular
  .module('components.utils')
  .directive('editField', editField);