function autofocus() {

  return  {
    restrict: 'A',
    scope: false,
    link: function ($scope, $element, $attrs) {
      $scope.$watch($attrs.autofocus, function(newVal, oldVal) {
        if(!newVal) {
          return;
        }
        
        setTimeout(function(){
          $element[0].focus();
        },0);

      });
    }
  }
}

angular
  .module('components.utils')
  .directive('autofocus', autofocus);