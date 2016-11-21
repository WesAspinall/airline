function ngConfirmClick() {
  return {
    link: function($scope, $element, $attrs) {
      var msg = $attrs.ngConfirmClick || "Are you sure?";
      var clickAction = $attrs.confirmedClick;
      $element.on('click', function($event) {
        if (window.confirm(msg)) {
          $scope.$eval(clickAction);
        }
      });
    }
  };
}

angular
  .module('components.utils')
  .directive('ngConfirmClick', ngConfirmClick);