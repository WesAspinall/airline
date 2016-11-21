function editField($parse) {

  return {
    restrict: 'A',
    scope: {

    },
    require: '^^passengers',
    link: function($scope, $element, $attrs, $ctrl, $event) {


     $element.on('click', function() {
       
       console.log($scope);
     })

    }
  }
}

angular
  .module('components.utils')
  .directive('editField', editField);